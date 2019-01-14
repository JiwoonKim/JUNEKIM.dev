import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import SEO from '../components/seo'

const PostListPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>태그</h1>
    <h1>최근 글</h1>
    <p>post list</p>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <hr />
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
