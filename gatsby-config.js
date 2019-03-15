const config = require('./config/meta')

module.exports = {
  siteMetadata: {
    title: `Hoover Honey`,
    description: `Raw unfiltered and locally produced honey`,
    author: `Dustin Heisey`,
    siteUrl: `https:hoover-honey.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      // options: {
      //   displayName: process.env.NODE_ENV !== `production`,
      //   fileName: false,
      // },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./config/typography.js`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-lodash`,
    //   options: {
    //     disabledFeatures: [`shorthands`, `cloning`, `currying`],
    //   },
    // },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsId,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: `/?utm_source=a2hs`,
        background_color: config.manifest.backgroundColor,
        theme_color: config.manifest.themeColor,
        display: `standalone`,
        icon: `src/images/placeholder.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
