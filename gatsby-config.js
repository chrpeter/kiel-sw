module.exports = {
  siteMetadata: {
    title: 'Knowit Kiel 2018',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "kiel.knowit.no",
        short_name: "Kiel",
        start_url: "/kiel-sw",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "public/static/logo_kielferga.png", // This path is relative to the root of the site.
        icons: [
          {
            src: "static/logo_kielferga192x192.png",
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-react-helmet',
  ],
  pathPrefix: '/kiel-sw'
};
