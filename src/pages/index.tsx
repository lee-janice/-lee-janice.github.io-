import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
}

const Index: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const lastUpdated = data.site.siteMetadata.lastUpdated
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <Head title="Home." keywords={[`blog`, `janice`, `lee`, `pomona`]} />
      <header>
        <h1>Welcome to my website. Why don't you stay a while?</h1>
        <p className='subtitle'>Website homepage; a short description; recent posts</p>
        <p className='pageinfo'>
          2021-09-18 ○
          last updated: {lastUpdated}
        </p>
      </header>
      <div className={`page-content`}>
        <h2>Description</h2>
        <hr />
        <p>
          This is my personal website.
          I created it primarily for experiential use as a centralized knowledge/content base and as an outlet for my increasingly erratic thoughts and curiosities.
          I hope that it will be a comprehensible introduction into some of the machinations of my mind, and I hope that you will enjoy your stay here!
          For information about me, see the <Link to={`/about-me`}>About me page</Link>; for information about the purpose and design of this site, see the <Link to={`/about-this-site`}>About this site page</Link>; to contact me, email me at <a href='mailto: janice.lee@pomona.edu'>janice.lee@pomona.edu</a>.
        </p>
        <h2>Recent posts</h2>
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
                topics: {node.frontmatter.topics.map((topic, i, arr) => <Link to={`/topics/${topic}/`}>{(i < arr.length - 1) ? topic + ', ' : topic}</Link>)}
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.frontmatter.subtitle }} />
            </div>
          )
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
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
      filter: {frontmatter: {published: {ne: false}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          excerpt
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

export default Index