import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import 'lodash.kebabcase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import SidebarMenu from './menu'
import './header.css'

// header component (title + meta data)
const Header = ({ title, metaDataType, metaData }) => (
  <header>
    <SidebarMenu />
    <div className="banner-container">
      <HeaderTitle title={title} metaDataType={metaDataType}/>
      <MetaData metaDataType={metaDataType} metaData={metaData}/>
    </div>
  </header>
)

// title portion of header component
const HeaderTitle = ({title, metaDataType}) => (
  <div className="banner-title-container">
    <h1 className="tag-decoration tag-decoration-left">
      <span>&lt;h1&gt;</span>  
    </h1>
    <TitleSting title={title} metaDataType={metaDataType} />
    <h1 className="tag-decoration tag-decoration-right">
      <span>&lt;/h1&gt;</span>
    </h1>
  </div>
)

const TitleSting = ({title, metaDataType}) => {
  if (metaDataType === 'blog-post' || metaDataType === 'all') {
    return (<h1 className="banner-title">{title}</h1>)
  }
  else {
    return (
      <h1>
        <h1 className="banner-title">{title}</h1>
        <span className="banner-title-include-string">에 해당하는 글</span>
      </h1>)
  }
}

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
      {metaData.tags.map(tag => {

        var _ = require('lodash');
        const tagPath = 'tags/' + _.kebabCase(tag);
        return (
          <Link to={tagPath} className="tag">
            <span>{tag}</span>
            <span>&#183;</span>
          </Link>
        )
      })}
    </span>
  </div>
)

/** for list pages (by tags),
 *  meta data: number of blog posts under tag category
 */
const PostListMetaData = ({metaData}) => (
  <div className="header-meta-data">
    <span>
      <FontAwesomeIcon className="meta-data-icon" icon="search" /> 
      <span className="header-posts-count">{metaData}</span>
      <span>matching articles</span>
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