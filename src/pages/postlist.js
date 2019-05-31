import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'

const PostListPage = ({data}) => (
  <Layout title="모든 글">
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <Link to={post.node.frontmatter.path}>
          <h4>{post.node.frontmatter.title}</h4>
          <small>Posted on {post.node.frontmatter.date}</small>
        </Link>
      </div>
    ))}
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
