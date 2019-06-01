import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './layout.css'

const BodyTagDecoratedLayout = ({ title, metaDataType, metaData, children }) => (
    <>
      <Header title={title} metaDataType={metaDataType} metaData={metaData} />

      <div className="body-container">
        <h1 className="tag-decoration body-tag-left">
          <span>&lt;body&gt;</span>  
        </h1>

        <main className="body-middle-part">
          {children}
        </main>

        <h1 className="tag-decoration body-tag-right">
          <span>&lt;/body&gt;</span>  
        </h1>
      </div>

      <Footer />
    </>
  )
  
BodyTagDecoratedLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
  
  export default BodyTagDecoratedLayout