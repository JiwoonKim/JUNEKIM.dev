import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import ToggleMenu from './menu'
import './header.css'

// header component (title + meta data)
const Header = ({ title, metaDataType, metaData }) => (
  <header>
    <nav>
      <ToggleMenu />
    </nav>
    <div className="banner-container">
      <HeaderTitle title={title}/>
      <MetaData metaDataType={metaDataType} metaData={metaData}/>
    </div>
  </header>
)

// title portion of header component
const HeaderTitle = ({title}) => (
  <div className="banner-title-container">
    <h1 className="tag-decoration tag-decoration-left">
      <span>&lt;h1&gt;</span>  
    </h1>
    <h1 className="banner-title">
      {title}
    </h1>
    <h1 className="tag-decoration tag-decoration-right">
      <span>&lt;/h1&gt;</span>
    </h1>
  </div>
)

/** meta data portion of header component
 *  (renders differently depending on type of post)
 */
const MetaData = ({metaDataType, metaData}) => {

  if (metaDataType === 'blog-post') {
    return <BlogPostMetaData metaData={metaData} />
  } 
  else if (metaDataType === 'post-list') {
    return <PostListMetaData metaData={metaData} />
  }
  else {
    return <DefaultMetaData />
  }
}

// no meta data in default
const DefaultMetaData = () => (
  <div className="header-meta-data"></div>
)

/** for blog posts,
 *  meta data: date + tags
 */
const BlogPostMetaData = ({metaData}) => (
  <div className="header-meta-data">
    <span>
      <FontAwesomeIcon className="meta-data-icon" icon="calendar-alt" />
      <span>{metaData.date}</span>
    </span>
    <span>
      <FontAwesomeIcon className="meta-data-icon" icon="tags" /> 
      {metaData.tags.map(tag => (
        <Link to="/" className="tag">
          <span>{tag}</span>
          <span>&#183;</span>
        </Link>
      ))}
    </span>
  </div>
)

/** for tag lists,
 *  meta data: number of blog posts under tag category
 */
const PostListMetaData = ({metaData}) => (
  <div className="header-meta-data">
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

library.add(faCalendarAlt, faTags, faSearch);

export default Header