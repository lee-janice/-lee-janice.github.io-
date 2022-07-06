import React from 'react'
import { Link, graphql } from 'gatsby'
import { styled } from '../styles/theme'

import Layout from '../components/layout'
import Head from '../components/head'
import { node } from 'prop-types'

interface Props {
    readonly data: PageQueryData
    readonly pageContext: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        previous?: any
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next?: any
    }
}

const StyledUl = styled('ul')`
  list-style-type: none;

  li::before {
    content: '' !important;
    padding-right: 0 !important;
  }
`

const PostTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
        <Layout title={siteTitle}>
            <Head title={post.frontmatter.title} description={post.excerpt} />
            <header>
                <h1>{post.frontmatter.title}</h1>
                <p className='subtitle'>{post.frontmatter.subtitle}</p>
                <p className='pageinfo'>
                    {post.frontmatter.date} ○
                    last updated: {post.frontmatter.lastupdated} ○
                    topics: {post.frontmatter.topics.map((topic, i, arr) => 
                        <Link to={`/topics/${topic}/`} key={topic}>
                            {(i < arr.length - 1) ? topic + ', ' : topic}
                        </Link>)}
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <StyledUl>
                        {previous && (
                            <li key={previous.fields.slug}>
                                <Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            </li>
                        )}
                        {next && (
                            <li key={next.fields.slug}>
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title} →
                                </Link>
                            </li>
                        )}
                    </StyledUl>
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
    markdownRemark: {
        id?: string
        excerpt?: string
        html: string
        frontmatter: {
            title: string
            subtitle: string
            date: string
            lastupdated: string
            topics: [string]
        }
    }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 1000)
      html
      frontmatter {
        title
        subtitle
        date(formatString: "YYYY-MM-DD")
        lastupdated(formatString: "YYYY-MM-DD")
        topics
      }
    }
  }
`

export default PostTemplate