import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'
import ListPostItem from '../components/layouts/list'
import '../components/layouts/list.css'

const PostListPage = ({data}) => (
  <Layout title="모든 글" metaDataType='all'>
    <ul className="list-of-posts">
      {data.allMarkdownRemark.edges.map(post => (
        <ListPostItem post={post.node.frontmatter} />
      ))}
    </ul>
  </Layout>
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
