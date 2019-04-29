const path = require('path');
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/components/templates/blog-post.js')
    const tagListTemplate = path.resolve('src/components/templates/tag-list.js')

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

        const posts = res.data.allMarkdownRemark.edges
        
        // create page for each post using blog-post template
        posts.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
            })
        })

        // collect all tags by iterating through each posts
        let allTags = []
        _.each(posts, (edge) => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            allTags = allTags.concat(edge.node.frontmatter.tags)
          }
        })

        // eliminate duplicate tags
        allTags = _.uniq(allTags)

        // create page for each tag using tag-list template 
        allTags.forEach((tag, index) => {
          createPage({
            path:  `tags/${_.kebabCase(tag)}/`,
            component: tagListTemplate,
            context: {
              tag,
            }
          })
        })

    })
}