import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'

const TagsPage = (props) => {

    const data = props.data.allMarkdownRemark.group;
    return (
        <Layout>
        <section>
            <h1>All Tags</h1>
            {
                data.map(tag => (
                    <ul>
                      <li>
                        <Link to={`tags/${tag.fieldValue.toLowerCase()}`}>
                          {tag.fieldValue} {`( ${tag.totalCount} )`}
                        </Link>
                      </li>
                    </ul>
            ))}
        </section>
        </Layout>
    )
};

export const tagQuery = graphql`
  query TagIndexQuery {
    allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }

`

export default TagsPage