import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ author }) => (
  <footer>
      <h1>
        © {new Date().getFullYear()}, Built by
        {` `}
        <Link to="/">
          {author}
        </Link>
      </h1>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer
