import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import monthNumberToName from '../util/monthNumberToName'

interface Props {
    readonly data: PageQueryData
    readonly pageContext: {
        year: string
        mthDirRegexByYear: string
    }
}

const YearTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const { year } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const group = data.numEntries.group
    const months = data.allDirectory.edges
    const entries = data.entries.edges

    return (
        <Layout title={siteTitle}>
            <Head
                title={`Year:${year}.`}
                keywords={[`journal`, year]}
            />
            <header>
                <h1>Year:{year}.</h1>
                <p className='subtitle'>Collection of journal entries for {year}; entries by month</p>
                <p className='pageinfo'>
                    2021-09-18 ○
                    last updated: 2021-10-14
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    <h2>Entries by month</h2>
                    <hr />
                    {months.map(({ node }) => {
                        const monthName = monthNumberToName(node.name)
                        const month = group.filter((monthDir) => monthDir.fieldValue.slice(-2) === node.name)[0]
                        console.log(group.map((monthDir) => monthDir.fieldValue.slice(-2)))
                        // if the year/month folder doesn't contain .md files, return
                        if (!month) return
                        return (
                            <div key={node.name}>
                                <h3>
                                    <Link to={`/journal/${year}/${node.name}/`}>{monthName + " " + year}</Link>
                                </h3>
                                <small>
                                    {month.totalCount} entr
                                    {month.totalCount === 1 ? 'y' : 'ies'}
                                </small>
                            </div>
                        )
                    })}
                    <br />
                    <h2>{year} entries</h2>
                    <hr />
                    {entries.map(({ node }) => {
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
    allDirectory: {
        edges: {
            node: {
                name: string
            }
        }[]
    }
    numEntries: {
        group: {
            fieldValue: string
            totalCount: number
        }[]
    }
    entries: {
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
  query YearPage($mthDirRegexByYear: String) {
    site {
      siteMetadata {
        title
      }
    }
    allDirectory(
        filter: { relativePath: {regex: $mthDirRegexByYear} }
        sort: {fields: name, order: ASC}
    ) {
      edges {
        node {
          name
        }
      }
    }
    numEntries: allMarkdownRemark(filter: {fields: {slug: {regex: $mthDirRegexByYear}}}) {
        totalCount
        group(field: frontmatter___group) {
          totalCount
          fieldValue
        }
    }
    entries: allMarkdownRemark(
        filter: {fields: {slug: {regex: $mthDirRegexByYear}}}
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
              topics
            }
          }
        }
      }
  }
`

export default YearTemplate