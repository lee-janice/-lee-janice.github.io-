import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

type StaticQueryData = {
    site: {
        siteMetadata: {
            description: string
            social: {
                github: string
            }
        }
    }
}

const Bio: React.FC = () => (
    <StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata {
            description
            social {
              github
            }
          }
        }
      }
    `}
        render={(data: StaticQueryData): React.ReactElement | null => {
            const { social } = data.site.siteMetadata
            return (
                <div>
                    <h1>Welcome to my website. Why don't you stay a while?</h1>
                    <p>
                        By Janice Lee
                        <br />
                        <a href={social.github}>Github</a>
                    </p>
                </div>
            )
        }}
    />
)

export default Bio