/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 * 'nhwlnz5t0g1l'
 *
 *'Bx42tZre-NDhCr3RkxU7Quiz-2w0Z3uHO6gNYbGVwu4'
 */

 require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

//this is where we will be putting in plug-ins to have access to styling, extensions etc!

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Project',
    author: 'Akiko Green'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` //comes from node.js
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options:{
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
