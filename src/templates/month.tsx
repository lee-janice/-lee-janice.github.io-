import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import monthNumberToName from '../util/monthNumberToName'

interface Props {
    readonly data: PageQueryData
    readonly pageContext: {
        year: string
        month: string
        dirRegexByYearAndMonth: string
    }
}

const MonthTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const { year, month } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const entries = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head
                title={`Year:${year}, month:${month}.`}
                keywords={[`journal`, year, month]}
            />
            <header>
                <h1>Year:{year}, month:{month}.</h1>
                <p className='subtitle'>Collection of journal entries for {monthNumberToName(month)} {year}</p>
                <p className='pageinfo'>
                    2021-09-18 ○
                    last updated: 2021-09-26
                </p>
            </header>
            <br />
            <article>
                <div className={`page-content`}>
                    {entries.map(({ node }) => {
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
    }
}

export const pageQuery = graphql`
  query MonthPage($dirRegexByYearAndMonth: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        filter: {fields: {slug: {regex: $dirRegexByYearAndMonth}}}
        sort: {fields: [frontmatter___date], order: DESC}
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

export default MonthTemplate