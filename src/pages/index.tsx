import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
}

const Index: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <Head title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>Welcome to my website. Why don't you stay a while?</h1>
      <p className='subtitle'>Website homepage; a short description; recent posts</p>
      <h2>Description</h2>
      <hr />
      <p>
        This is my website.
        I created it primarily for experiential use as a centralized knowledge/content base and as an outlet for my increasingly erratic thoughts and curiosities.
        I hope that it will be a comprehensible introduction into some of the machinations of my mind, and I hope that you will enjoy your stay here!
        For information about me, see the About page; for information about the purpose and design of this site, see the Design page; to contact me, email me at janice.lee@pomona.edu.
      </p>
      <h2>Recent posts</h2>
      <hr />
      <article>
        <div className={`page-content`}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
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
  query {
    site {
      siteMetadata {
        title
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
          }
        }
      }
    }
  }
`

export default Index