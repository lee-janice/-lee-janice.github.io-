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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    // remark transformer to convert markdown to html
    {
      resolve: `gatsby-transformer-remark`,
      // resolve: `gatsby-plugin-mdx`,
      options: {
        // extensions: [`.mdx`, `.md`],
        // defaultLayouts: {
        //   post: require.resolve('./src/templates/post.tsx'),
        //   tag: require.resolve('./src/templates/tag.tsx'),
        // },
        // gatsbyRemarkPlugins: [
        plugins: [
          // sidenotes and margins ala tufte css 
          `gatsby-remark-tufte`,
          // autosizes images
          {
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
        ],
      },
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
        icon: `src/images/tea.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lee-janice.github.io`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
