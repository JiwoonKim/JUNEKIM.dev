import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import ToggleMenu from './menu'
import './header.css'

const Header = ({ title }) => (
  <header>
    <nav>
      <ToggleMenu />
    </nav>
    <div className="banner-container">
      <HeaderTitle title={title}/>
      <div className="meta-data">
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
)

const HeaderTitle = ({title}) => (
  <div className="banner-title-container">
    <h1 className="tag-decoration">
      <span>&lt;h1&gt;</span>  
    </h1>
    <h1 className="banner-title">
      {title}
    </h1>
    <h1 className="tag-decoration">
      <span>&lt;/h1&gt;</span>
    </h1>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
