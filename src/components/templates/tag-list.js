import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/layout'

export default function TagsTemplate(props) {

    const posts = props.data.allMarkdownRemark.edges;
    const { tag } = props.pageContext;

    return (
        <Layout title={tag} metaDataType metaData>
            <h1>{`Available posts in ${tag}`}</h1>
            <div className="tags">
                {
                    posts.map(({ node }, i) => (
                        <div>
                            <Link to={`${node.frontmatter.path}`} key={i} >
                                {node.frontmatter.title}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )

}

export const tagQuery = graphql`
query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }

`