/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("constants")

// create own GraphQL schema to allow for nullable types in frontmatter
// https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#nested-types
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
        type MarkdownRemark implements Node {
            frontmatter: FrontMatter
        }
        type FrontMatter {
            title: String
            topics: [String]
            category: String
            booknote: [BookNote]
        }
        type BookNote {
            author: String
            title: String
        }
    `;
    createTypes(typeDefs);
};

// create pages of the website by transforming markdown files into html
exports.createPages = ({ graphql, actions }) => {
    // grabs topics and title from frontmatter - these must be set for each markdown file
    return graphql(
        `
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                topics
                title
                layout
                published
                booknote {
                    author
                    title
                }
              }
            }
          }
        }
        years: allDirectory(filter: {relativeDirectory: {regex: "/journal$/"}}) {
            edges {
              node {
                name
              }
            }
        }
        months: allDirectory(filter: {relativeDirectory: {regex: "/journal/[0-9]{4}$/"}}) {
            edges {
              node {
                name
                relativeDirectory
              }
            }
        }
      }
    `,
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // get the templates
        const postTemplate = path.resolve(`./src/templates/post.tsx`)
        const topicTemplate = path.resolve('./src/templates/topic.tsx')
        const yearTemplate = path.resolve('./src/templates/year.tsx')
        const monthTemplate = path.resolve('./src/templates/month.tsx')
        const bookNoteTemplate = path.resolve('./src/templates/booknote.tsx')

        // create post pages
        // posts is an array of posts sorted from earliest -> latest
        const posts = result.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.published)
        console.log(posts)
        posts.forEach((post, index) => {
            var previous = index === posts.length - 1 ? null : posts[index + 1].node
            var next = index === 0 ? null : posts[index - 1].node

            // use booknote template for book note pages 
            // author and title in the frontmatter of the markdown file must match 
            // the author and title in the yaml book quote file 
            if (post.node.frontmatter.layout === 'booknote') {
                actions.createPage({
                    path: post.node.fields.slug,
                    component: bookNoteTemplate,
                    context: {
                        slug: post.node.fields.slug,
                        author: post.node.frontmatter.booknote[0].author,
                        title: post.node.frontmatter.booknote[0].title,
                        previous,
                        next,
                    },
                })
            } else { // use general post template for everything else
                actions.createPage({
                    path: post.node.fields.slug,
                    component: postTemplate,
                    context: {
                        slug: post.node.fields.slug,
                        previous,
                        next,
                    },
                })
            }
        })

        // iterate through each post, putting all found topics into `topics`
        let topics = []
        posts.forEach(post => {
            if (post.node.frontmatter.topics) {
                topics = topics.concat(post.node.frontmatter.topics)
            }
        })
        const uniqTopics = [...new Set(topics)]

        // create topic pages
        uniqTopics.forEach(topic => {
            if (!topic) return
            actions.createPage({
                path: `/topics/${topic}/`,
                component: topicTemplate,
                context: {
                    topic,
                },
            })
        })

        // create year pages 
        const years = result.data.years.edges
        years.forEach(year => {
            actions.createPage({
                path: `/journal/${year.node.name}/`,
                component: yearTemplate,
                context: {
                    year: year.node.name,
                    mthDirRegexByYear: `/journal/${year.node.name}/[0-9]{2}/`,
                },
            })
        })

        // create month pages
        const months = result.data.months.edges
        months.forEach(month => {
            const year = month.node.relativeDirectory.slice(-4)
            actions.createPage({
                path: `${month.node.relativeDirectory}/${month.node.name}`,
                component: monthTemplate,
                context: {
                    year: year,
                    month: month.node.name,
                    dirRegexByYearAndMonth: `/journal/${year}/${month.node.name}/`,
                }
            })
        })
    })
}

// creates a field called slug for markdown files, value is based on filename
exports.onCreateNode = ({ node, actions, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        actions.createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
