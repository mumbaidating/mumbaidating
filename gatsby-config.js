/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mumbai Escorts",
    description: "Best escorts in Mumbai",
    twitterUsername: `@john_smilga`,
    image: `/sexy-night.png`,
    siteUrl: `https://mumbai-escorts.netlify.app`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9a1dwghwcfwu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700", "800", "900"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://mumbai-escorts.netlify.app`,
      },
    },
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "Home",
        },
      },
    },
  ],
}
