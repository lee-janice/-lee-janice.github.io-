import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
    readonly data: PageQueryData
    readonly pageContext: {
        topic: string
    }
}

const TopicTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const { topic } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head
                title={`Topic:${topic}.'`}
                keywords={[`blog`, `gatsby`, `javascript`, `react`, topic]}
            />
            <header>
                <h1>Topic:{topic}.</h1>
                <p className='subtitle'>Collection of posts on the topic `{topic}`</p>
                <p className='pageinfo'>
                    2021-09-27 ○
                    last updated: 2021-10-14
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3>
                                    <Link to={node.fields.slug}>{title}</Link>
                                </h3>
                                <small>
                                    {node.frontmatter.date} ○
                                    topics: {node.frontmatter.topics.map((topic, i, arr) => <Link to={`/topics/${topic}/`}>{(i < arr.length - 1) ? topic + ', ' : topic}</Link>)}
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
        }
    }
    allMarkdownRemark: {
        totalCount: number
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
    }
}

export const pageQuery = graphql`
  query TopicPage($topic: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, filter: {frontmatter: {topics: {in: [$topic]}}}) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 2500)
          fields {
            slug
          }
          frontmatter {
            date
            title
            subtitle
            topics
          }
        }
      }
    }
  }
`

export default TopicTemplate