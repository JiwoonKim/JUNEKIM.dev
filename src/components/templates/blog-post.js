import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/layout'
import Image from '../image'
import SEO from '../seo'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <article className="post">
          <section className="post-title">
            <h1>{post.frontmatter.title}</h1>
            <section className="post-title-flex">
              <time>{post.frontmatter.date} | </time> 
              {post.frontmatter.tags.map(tag => (
                <Link to="/" className="tag">
                  <FontAwesomeIcon icon="tag" /> 
                  <span>{tag}</span>
                </Link>
              ))}
              </section>
          </section>
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

library.add(faTag);