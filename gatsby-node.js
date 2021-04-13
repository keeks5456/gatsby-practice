//part one of how we will be adding a slug 

const path = require('path')

module.exports.onCreateNode = ({node , actions}) => {
  const {createNodeField} = actions

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
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if(response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

    response.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        component: blogTemplate,
        path: `/blog/${node.frontmatter.slug}`,
        context: {
          slug: node.frontmatter.slug
        }
      })
    })
  
    //get path to template
    //get markdown data
    //create new page

}