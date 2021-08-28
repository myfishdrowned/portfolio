module.exports = {
  siteMetadata: {
    siteUrl: "https://www.justincaovan.com",
    title: "Justin Caovan | Front End Developer",
    description: "Personal portfolio website for Justin Caovan with contact information, personal projects, and biography",
    author: "Justin Caovan"
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  'gatsby-plugin-postcss',
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
  'gatsby-plugin-loadable-components-ssr',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Justin Caovan Portfolio`,
      short_name: `Portfolio`,
      start_url: `/`,
      icon: `src/images/favicon.png`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
    },
  },
  `gatsby-plugin-offline`
],
};
