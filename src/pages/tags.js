import React from 'react'
import { Link, graphql } from 'gatsby'
import 'lodash.kebabcase'

import Layout from '../components/layouts/layout'

const TagsPage = (props) => {

    const data = props.data.allMarkdownRemark.group;
    return (
        <Layout title="모든 태크" metaDataType='all'>
        <section>
            {data.map((tag, i) => {
              var _ = require('lodash');
              const tagPath = 'tags/' + _.kebabCase(tag.fieldValue);
              return (
                <ul>
                  <li>
                    <Link key={i} to={tagPath}>
                      {tag.fieldValue} {`( ${tag.totalCount} )`}
                    </Link>
                  </li>
                </ul>
              )}
            )}
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