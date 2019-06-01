import React from 'react'
import { Link, graphql } from 'gatsby'

import BodyTagDecoratedLayout from '../components/layouts/decorated-layout'
import ListPostItem from '../components/layouts/list'
import '../components/layouts/list.css'

const PostListPage = ({data}) => (
  <BodyTagDecoratedLayout title="모든 글" metaDataType='all'>
    <ul className="list-of-posts">
      {data.allMarkdownRemark.edges.map(post => (
        <ListPostItem post={post.node.frontmatter} />
      ))}
    </ul>
  </BodyTagDecoratedLayout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            path
            title
            date
            tags
          }
        }
      }
    }
  }
`

export default PostListPage
