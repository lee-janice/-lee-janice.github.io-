import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
    readonly data: PageQueryData
    readonly pageContext: {
        tag: string
    }
}

const TagTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const { tag } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head
                title={`Posts about '${tag}'`}
                keywords={[`blog`, `gatsby`, `javascript`, `react`, tag]}
            />
            <article>
                <header>
                    <h1>Articles about `{tag}`</h1>
                </header>
                <div className={`page-content`}>
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3>
                                    <Link to={node.fields.slug}>{title}</Link>
                                </h3>
                                <small>{node.frontmatter.date}</small>
                                <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />
                            </div>
                        )
                    })}
                </div>
            </article>
        </Layout>
    )
}

interface PageQueryData {
    site: {
        siteMetadata: {
            title: string
        }
    }
    allMarkdownRemark: {
        totalCount: number
        edges: {
            node: {
                fields: {
                    slug: string
                }
                frontmatter: {
                    date: string
                    title: string
                    excerpt: string
                }
            }
        }[]
    }
}

//   excerpt(pruneLength: 2500)
export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, filter: {frontmatter: {tags: {in: [$tag]}}}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            excerpt
          }
        }
      }
    }
  }
`

export default TagTemplate