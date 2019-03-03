import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import ToggleMenu from './menu'
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ToggleMenu />
    </nav>
    <div className="title">
      <h1>
        <Link className="title-link" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
