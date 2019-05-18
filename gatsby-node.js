const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
          }
        }
      }
    }
  `).then( result => {
    result.data.allWordpressPost.edges.map(({node}) =>{
      createPage({
        path : `${node.slug}/`,
        component : path.resolve(`./src/templates/blog-post.js`),
        context : {
          id : node.id
        }
      })
    })
  })
}