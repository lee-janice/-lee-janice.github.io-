import React from 'react'
import { Link, graphql } from 'gatsby'
import { styled } from '../styles/theme'

import Layout from '../components/layout'
import Head from '../components/head'
import Quote from '../components/quote'

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

const BookNoteTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext
    const quotes = data.quotesYaml.quotes

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
                        <Link to={`/topics/${topic}/`}>
                            {(i < arr.length - 1) ? topic + ', ' : topic}
                        </Link>)}
                </p>
            </header>
            <article>
                <div className={`page-content`}>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <section>
                        <h2>Quotes</h2>
                        <hr></hr>
                        {quotes.map(bookQuote => 
                            <Quote
                                key          = {bookQuote.quote}
                                chapternum   = {bookQuote.chapter_number}
                                chaptertitle = {bookQuote.chapter_title}
                                pagenum      = {bookQuote.page_number}
                                {...bookQuote} />
                            )
                        }
                    </section>
                    <StyledUl>
                        {previous && (
                            <li>
                                <Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            </li>
                        )}
                        {next && (
                            <li>
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title} →
                                </Link>
                            </li>
                        )}
                    </StyledUl>
                </div>
            </article>
        </Layout >
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
    quotesYaml: {
        quotes: [{
            chapter_number: number
            chapter_title: string
            description?: string
            page_number: number
            importance: number
            quote: string
            notes?: string
            tags?: [string]
        }]
    }
}

export const pageQuery = graphql`
  query BookPage($slug: String!, $author: String = "", $title: String = "") {
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
    quotesYaml(author: {eq: $author}, title: {eq: $title}) {
      quotes {
        chapter_number
        chapter_title
        description
        page_number
        quote
        importance
        notes
      }
    }
  }
`

export default BookNoteTemplate