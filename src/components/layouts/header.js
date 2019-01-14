import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ToggleMenu from './menu'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#F4D078`,
      opacity: `1.0`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <ToggleMenu />
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
