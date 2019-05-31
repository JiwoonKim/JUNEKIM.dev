import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ title, metaDataType, metaData, children }) => (
  <>
    <Header title={title} metaDataType={metaDataType} metaData={metaData} />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
