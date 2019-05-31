import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFolderOpen, faSearch } from '@fortawesome/free-solid-svg-icons'

import ToggleMenu from './menu'
import './header.css'

const Header = ({ title }) => (
  <header>
    <nav>
      <ToggleMenu />
    </nav>
    <div className="banner-container">
      <HeaderTitle title={title}/>
      
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

const DefaultMetaData = ({}) => (
  <div className="meta-data">
    <span>
      Logging ... since 2019
    </span>
  </div>
)

const BlogPostMetaData = ({}) => (
  <div className="meta-data">
    <span>
      <FontAwesomeIcon icon="calander-alt" /> 
    </span>
    <span>
      <FontAwesomeIcon icon="folder-open" /> 
    </span>
  </div>
)

const PostListMetaData = ({}) => (
  <div className="meta-data">
    <span>
      <FontAwesomeIcon icon="search" /> 
    </span>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

library.add(faCalendarAlt, faFolderOpen, faSearch);

export default Header