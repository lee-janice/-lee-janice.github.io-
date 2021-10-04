import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
    readonly data: PageQueryData
}

const Notes: React.FC<Props> = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head title="Notes." keywords={[`note`]} />
            <header>
                <h1>Notes.</h1>
                <p className='subtitle'>Collection of all notes; recent notes</p>
                <p className='pageinfo'>
                    2021-10-01 ○
                    last updated: 2021-10-02
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    <h2>Recent notes</h2>
                    <hr />
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3>
                                    <Link to={node.fields.slug}>{title}</Link>
                                </h3>
                                <small>{node.frontmatter.date}</small>
                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
        edges: {
            node: {
                excerpt: string
                fields: {
                    slug: string
                }
                frontmatter: {
                    date: string
                    title: string
                    subtitle: string
                }
            }
        }[]
        group: {
            fieldValue: string
            totalCount: number
        }[]
    }
    allDirectory: {
        edges: {
            node: {
                name: string
            }
        }[]
    }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: "notes"}}}
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 10
    ) {
      edges {
        node {
          excerpt(pruneLength: 1000)
          fields {
            slug
          }
          frontmatter {
            date
            title
            subtitle
          }
        }
      }
    }
  }
`

export default Notes