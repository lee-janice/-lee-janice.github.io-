import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import PostPreview from '../components/postPreview'

interface Props {
    readonly data: PageQueryData
    readonly pageContext: {
        topic: string
    }
}

const TopicTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const { topic } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const lastUpdated = data.site.siteMetadata.lastUpdated
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head
                title={`Topic:${topic}.'`}
                keywords={[`blog`, `gatsby`, `javascript`, `react`, topic]}
            />
            <header>
                <h1>Topic:{topic}.</h1>
                <p className='subtitle'>
                    Collection of posts on the topic `{topic}`
                </p>
                <p className='pageinfo'>
                    2021-09-27 ○
                    last updated: {lastUpdated}
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    {posts.map(({ node }) => 
                        <PostPreview 
                            title       = {node.frontmatter.title}
                            subtitle    = {node.frontmatter.subtitle}
                            slug        = {node.fields.slug}
                            date        = {node.frontmatter.date}
                            lastUpdated = {node.frontmatter.lastupdated}
                            topics      = {node.frontmatter.topics}
                            excerpt     = {node.excerpt}
                            showExcerpt = {false}/>
                    )}
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
        totalCount: number
        edges: {
            node: {
                excerpt: string
                fields: {
                    slug: string
                }
                frontmatter: {
                    title: string
                    subtitle: string
                    date: string
                    lastupdated: string
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
        lastUpdated
      }
    }
    allMarkdownRemark(limit: 1000, filter: {frontmatter: {topics: {in: [$topic]}, published: {ne: false}}}) {
        
      totalCount
      edges {
        node {
          excerpt(pruneLength: 2500)
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date
            lastupdated
            topics
          }
        }
      }
    }
  }
`

export default TopicTemplate