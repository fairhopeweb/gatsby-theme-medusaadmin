module.exports = {
  siteMetadata: {
    title: `Medusa Admin`,
    description: `The best ecommerce software.`,
    author: `@medusajs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `medusa-admin`,
        short_name: `medusa`,
        icon: `src/assets/svg/logo.svg`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/a/*`] },
    },
  ],
}
