import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'
import ListPostItem from '../layouts/list'
import '../layouts/list.css'

const TagsTemplate = (props) => {

    const posts = props.data.allMarkdownRemark.edges;
    const { tag } = props.pageContext;
    const count = props.data.allMarkdownRemark.totalCount;

    return (
        <Layout title={tag} metaDataType='post-list' metaData={count}>
          <ul className="list-of-posts">
            {posts.map(post => (
              <ListPostItem post={post.node.frontmatter} />
            ))}
          </ul>
        </Layout>
    )

}

export const tagQuery = graphql`
query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
      totalCount
    }
  }
`

export default TagsTemplate