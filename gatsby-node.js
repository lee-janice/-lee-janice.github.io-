/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// transforms markdown files into html
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
              }
            }
          }
        }
      }
    `,
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Get the templates
        const postTemplate = path.resolve(`./src/templates/post.tsx`)
        const topicTemplate = path.resolve('./src/templates/topic.tsx')

        // Create post pages
        const posts = result.data.allMarkdownRemark.edges
        posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            actions.createPage({
                path: post.node.fields.slug,
                component: postTemplate,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            })
        })

        // Iterate through each post, putting all found topic into `topics`
        let topics = []
        posts.forEach(post => {
            if (post.node.frontmatter.topics) {
                topics = topics.concat(post.node.frontmatter.topics)
            }
        })
        const uniqTopics = [...new Set(topics)]

        // Create topic pages
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
