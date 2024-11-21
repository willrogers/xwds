module.exports = {
  siteMetadata: {
    title: `Crosswords`,
    description: `A subsite for rendering crosswords using Gatsby.`,
    author: `@willrogers`,
    parentUrl: `https://wllrg.rs`,
  },
  pathPrefix: "/static",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-plugin-image`,
  ],
  pathPrefix: "/xwds",
};
