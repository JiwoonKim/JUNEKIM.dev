import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

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
      <>
        <Header title={data.site.siteMetadata.title} />
        <main>
          
        </main>
        <Footer />
      </>
    )}
  />
)

export default IndexPage
