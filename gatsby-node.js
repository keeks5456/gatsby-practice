//part one of how we will be adding a slug 

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require('path')

module.exports.onCreateNode = ({node , actions}) => {
  const {createNodeField} = actions

// console.log(JSON.stringify(node, undefined, 4))
  if(node.internal.type === 'MarkdownRemark'){
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
} 

module.exports.createPages = async ({graphql, actions, reporter}) =>{
  const {createPage} = actions
  const blogTemplate = path.resolve('./src/templates/blog.js') 
  const response = await graphql(`
    query{
      allContentfulBlogPost {
        edges {
          node {
              slug
          }
        }
      }
    }
  `)

  if(response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

    response.data.allContentfulBlogPost.edges.forEach(({node}) => {
      createPage({
        component: blogTemplate,
        path: `/blog/${node.slug}`,
        context: {
          slug: node.slug
        }
      })
    })

}