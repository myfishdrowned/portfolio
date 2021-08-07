module.exports = {
  siteMetadata: {
    siteUrl: "https://justincaovan.com",
    title: "justincaovan.com",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  'gatsby-plugin-postcss',
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
],
};
