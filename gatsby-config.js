// enable access to environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: `a cozy space`,
    author: {
      name: `Janice Lee`,
      email: `janice.lee@pomona.edu`,
    },
    social: {
      twitter: `https://twitter.com/`,
      github: `https://github.com/lee-janice`,
    },
    siteUrl: `https://lee-janice.github.io`,
    lastUpdated: `2022-04-28`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    // custom content for head of page
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // filesystem 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quotes`,
        path: `${__dirname}/src/data/quotes`,
      },
    },
    // remark transformer to convert markdown to html
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // sidenotes and margins ala tufte css 
          `gatsby-remark-tufte`,
          // autosizes images
          {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          // autoresizes iframes
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // adds link for each header in a post  
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `no-tufte-underline`,
            }

          },
          // syntax highlighting for code blocks
          `gatsby-remark-prismjs`,
          // copies externally linked files to project on build
          `gatsby-remark-copy-linked-files`,
          // converts quotes/apostrophes to smart quotes/apostrophes
          `gatsby-remark-smartypants`,
          // render LaTeX
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
        ],
      },
    },
    // transformer to parse yaml data
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // allows us to make a query called allQuotesYaml
        // to query yaml in subdirectories of a filesystem source
        // https://meaganwaller.com/render-dynamic-pages-gatsby-file-system-route-api-yaml
        typeName: ({ node }) => {
          const name = node.sourceInstanceName
          if (name === `quotes`) {
            return `QuotesYaml`
          }
          return name
        }
      }
    },
    // enhances and resizes images
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // dark mode theme toggler
    'gatsby-plugin-dark-mode',
    // favicon
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `a cozy space`,
        short_name: `acozy.space`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tea.png`, // this path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lee-janice.github.io`,
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // you have to prepend the environment variable name with GATSBY in order for it to be accessible by the browser
        code: isProduction ? process.env.GATBSY_GOATCOUNTER_PAGE_CODE : 'test',
        allowLocal: !isProduction,
      },
    },
  ],
}
