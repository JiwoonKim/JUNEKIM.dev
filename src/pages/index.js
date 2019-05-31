import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout title={data.site.siteMetadata.title} metaDataType='all'>
        <main>
          
        </main>
      </Layout>
    )}
  />
)

export default IndexPage
