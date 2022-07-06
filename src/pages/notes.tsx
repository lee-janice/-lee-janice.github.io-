import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import PostPreview from '../components/postPreview'
import { nodeTypes } from '@mdx-js/mdx'

interface Props {
    readonly data: PageQueryData
}

const Notes: React.FC<Props> = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title
    const lastUpdated = data.site.siteMetadata.lastUpdated
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head title="Notes." keywords={[`note`]} />
            <header>
                <h1>Notes.</h1>
                <p className='subtitle'>Collection of all notes; recent notes</p>
                <p className='pageinfo'>
                    2021-10-01 ○
                    last updated: {lastUpdated}
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    <h2>Recent notes</h2>
                    <hr />
                    {posts.map(({ node }) => 
                        <PostPreview key={node.fields.slug}
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
      filter: {frontmatter: {category: {eq: "notes"}, published: {ne: false}}}
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
            title
            subtitle
            date(formatString: "YYYY-MM-DD", locale: "pt")
            lastupdated(formatString: "YYYY-MM-DD", locale: "pt")
            topics
          }
        }
      }
    }
  }
`

export default Notes