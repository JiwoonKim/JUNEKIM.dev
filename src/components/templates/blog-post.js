import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/layout'
import Image from '../image'

const Template = ({ data }) => {
    const post = data.markdownRemark

    return (
      <Layout 
        title={post.frontmatter.title} 
        metaDataType={'blog-post'}
        metaData={post.frontmatter} >

        <article className="post">
          <section className="post-content" 
            dangerouslySetInnerHTML={{ __html: post.html }} 
          />
        </article>

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

export default Template