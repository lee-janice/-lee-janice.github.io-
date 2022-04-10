import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
    readonly data: PageQueryData
}

const Topics: React.FC<Props> = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title
    const lastUpdated = data.site.siteMetadata.lastUpdated
    const group = data.allMarkdownRemark && data.allMarkdownRemark.group

    return (
        <Layout title={siteTitle}>
            <Head title="Topics." keywords={[]} />
            <header>
                <h1>Topics.</h1>
                <p className='subtitle'>Collection of topics that are discussed on my website, listed alphabetically</p>
                <p className='pageinfo'>
                    2021-09-18 ○
                    last updated: {lastUpdated}
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    {group &&
                        group.map(
                            topic =>
                                topic && (
                                    <div key={topic.fieldValue}>
                                        <h3>
                                            <Link to={`/topics/${topic.fieldValue}/`}>{topic.fieldValue}</Link>
                                        </h3>
                                        <small>
                                            {topic.totalCount} post
                                            {topic.totalCount === 1 ? '' : 's'}
                                        </small>
                                    </div>
                                ),
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
        group: {
            fieldValue: string
            totalCount: number
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
    allMarkdownRemark(filter: {frontmatter: {published: {ne: false}}}) {
      group(field: frontmatter___topics) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Topics