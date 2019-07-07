import React from 'react'
import { graphql } from 'gatsby'

import BodyTagDecoratedLayout from '../layouts/decorated-layout'
import ListPostItem from '../layouts/list'
import '../layouts/list.css'

const TagsTemplate = (props) => {

    const posts = props.data.allMarkdownRemark.edges;
    const { tag } = props.pageContext;
    const count = props.data.allMarkdownRemark.totalCount;

    return (
        <BodyTagDecoratedLayout title={tag} metaDataType='post-list' metaData={count}>
          <ul className="list-of-posts">
            {posts.map(post => (
              <ListPostItem slug={post.node.fields.slug} frontmatter={post.node.frontmatter} />
            ))}
          </ul>
        </BodyTagDecoratedLayout>
    )

}

export const tagQuery = graphql`
query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
      totalCount
    }
  }
`

export default TagsTemplate