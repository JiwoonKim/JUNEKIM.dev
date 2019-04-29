import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/layout'

export default function TagsTemplate(props) {

    const post = props.data.markdownRemark;
    console.log(post);
    const { tag } = props.pageContext;

    return (
        <Layout>
            <h1>{`Available posts  in ${tag}`}</h1>
            <div className="tags">
            </div>
        </Layout>
    )

}

export const tagQuery = graphql`
  query TagPostByPath($tag: String!) {
    markdownRemark(frontmatter: { tags: { eq: $tag } }) {
      frontmatter {
        path
        title
        date
      }
    }
  }
`