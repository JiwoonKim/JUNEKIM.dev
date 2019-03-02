const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/components/templates/blog-post.js')

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              tags
            }
          }
        }
      }
    }
  `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
            })
        })
    })
}

