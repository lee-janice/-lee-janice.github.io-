import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
    readonly data: PageQueryData
}

const Essays: React.FC<Props> = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title
    const lastUpdated = data.site.siteMetadata.lastUpdated
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head title="Essays." keywords={[`essay`]} />
            <header>
                <h1>Essays.</h1>
                <p className='subtitle'>Collection of all essays; recent essays</p>
                <p className='pageinfo'>
                    2021-10-01 ○
                    last updated: {lastUpdated}
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    <h2>Recent essays</h2>
                    <hr />
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3>
                                    <Link to={node.fields.slug}>{title}</Link>
                                </h3>
                                <small>
                                    {node.frontmatter.date} ○
                                    topics: {node.frontmatter.topics.map((topic, i, arr) => 
                                        <Link to={`/topics/${topic}/`} key={topic}>
                                            {(i < arr.length - 1) ? topic + ', ' : topic}
                                        </Link>)}
                                </small>
                                <p dangerouslySetInnerHTML={{ __html: node.frontmatter.subtitle }} />
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
            lastUpdated: string
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
                    topics: [string]
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
        lastUpdated
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: "essays"}, published: {ne: false}}}
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
            date(formatString: "YYYY-MM-DD", locale: "pt")
            title
            subtitle
            topics
          }
        }
      }
    }
  }
`

export default Essays