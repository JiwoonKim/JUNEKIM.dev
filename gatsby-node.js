const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

// create pages from markdown files
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/components/templates/blog-post.js')
    const tagListTemplate = path.resolve('src/components/templates/tag-list.js')

    // fetch markdown file data
    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            html
            frontmatter {
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
        
        // create blog posts pages using blog-post template
        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: postTemplate,
                context: {
                  slug: node.fields.slug,
                }
            })
        })

        // collect all the tags from markdown files
        let allTags = []
        _.each(posts, (edge) => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            allTags = allTags.concat(edge.node.frontmatter.tags)
          }
        })

        // eliminate duplicate tags
        allTags = _.uniq(allTags)

        // create list page for each tag using tag-list template
        allTags.forEach((tag, index) => {
          createPage({
            path: `tags/${_.kebabCase(tag)}/`,
            component: tagListTemplate,
            context: {
              tag,
            }
          })
        })

    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    console.log(value)

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}