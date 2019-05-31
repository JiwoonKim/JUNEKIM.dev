import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './footer.css'

const Footer = ({ author }) => (
  <footer>
      <h1>
        <span>© {new Date().getFullYear()}, Built by {` `}</span>
        <Link to="/">
          {author}
        </Link>
        <span>{` `}</span>
        <a className="footer-github-link" href="https://github.com/JiwoonKim">
          <FontAwesomeIcon icon={['fab', 'github']} /> 
        </a>
      </h1>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

library.add(fab);

export default Footer
