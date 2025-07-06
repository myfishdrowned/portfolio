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
      icon: `src/images/SR.png`,
      icons: [
        {
          src: `src/images/icon-48x48.png`,
          sizes: `48x48`,
          type: `image/png`,
        },
        {
          src: `src/images/icon-72x72.png`,
          sizes: `72x72`,
          type: `image/png`,
        },
        {
          src: `src/images/icon-96x96.png`,
          sizes: `96x96`,
          type: `image/png`,
        },
        {
          src: `src/images/icon-144x144.png`,
          sizes: `144x144`,
          type: `image/png`,
        },
        {
          src: `src/images/icon-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `src/images/icon-256x256.png`,
          sizes: `256x256`,
          type: `image/png`,
        },
        {
          src: `src/images/icon-384x384.png`,
          sizes: `384x384`,
          type: `image/png`,
        },
        {
          src: `src/images/icon-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
    },
  },
  `gatsby-plugin-offline`
],
};
