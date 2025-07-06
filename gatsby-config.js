module.exports = {
  siteMetadata: {
    siteUrl: "https://www.justincaovan.com",
    title: "Saif-Ur Rahman | Front End Developer",
    description: "Saif-Ur Rahman is a front end developer who loves creating seamless, intuitive, and beautiful digital experiences.",
    author: "Saif-Ur Rahman",
    image: "src/images/home.png"
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  'gatsby-plugin-postcss',
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
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
      name: `Saif-Ur Rahman Portfolio`,
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
