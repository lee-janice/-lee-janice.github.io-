import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
}

const About: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social

  return (
    <Layout title={siteTitle}>
      <Head title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div>
        <h1>About me.</h1>
        <p className='subtitle'></p>
        <p>
          By Janice Lee
          <br />
          <a href={social.github}>Github</a>
        </p>
      </div>
    </Layout>
  )
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
      social: {
        github: string
      }
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          github
        }
      }
    }
  }
`

export default About