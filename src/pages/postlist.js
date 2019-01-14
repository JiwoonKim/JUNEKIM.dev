import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import SEO from '../components/seo'

const PostListPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>태그</h1>
    <hr />
    <h1>최근 글</h1>
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
