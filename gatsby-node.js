const path = require('path');
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

// 마크다운 파일을 바탕으로 각 페이지 생성
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    // 템플릿 가져오기
    const postTemplate = path.resolve('src/components/templates/blog-post.js')
    const tagListTemplate = path.resolve('src/components/templates/tag-list.js')

    // 마크다운 파일 데이터 모두 불러오기
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

        // 예외 처리
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        
        /** blog-post template을 사용하여 각 마크다운 파일마다
         *  페이지를 생성하여 명시한 패스에 렌더링하기
        */
        const posts = res.data.allMarkdownRemark.edges
        posts.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
            })
        })

        // 마크다운 파일들의 태그를 모아 태그 모음 생성
        let allTags = []
        _.each(posts, (edge) => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            allTags = allTags.concat(edge.node.frontmatter.tags)
          }
        })
        // 중복 태그 없애기
        allTags = _.uniq(allTags)

        // tag-list template을 사용하여 각 태그마다 페이지 생성
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