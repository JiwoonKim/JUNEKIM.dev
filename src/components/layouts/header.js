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
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        style={{
          margin: 0,
          display: `inline-block`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#fffce1`,
            textDecoration: `none`,
          }}
        >
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
