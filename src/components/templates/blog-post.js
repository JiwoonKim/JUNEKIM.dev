import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/layout'
import Image from '../image'
import SEO from '../seo'

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <span style={{ color: `lightgrey` }}>{post.frontmatter.date}</span> | 
          <span>{post.frontmatter.tags}</span>
          <br />
          <br />
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        tags
      }
    }
  }
`

