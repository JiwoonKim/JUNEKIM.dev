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
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`

export default Template