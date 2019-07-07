import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListPostItem = ( { slug, frontmatter } ) => (
    <li className="list-item">
        <Link to={slug}>
          <h2>{frontmatter.title}</h2>
          <small>
            <FontAwesomeIcon icon="calendar-alt" />
            <span className="list-item-date">{frontmatter.date}</span>
          </small>
        </Link>
    </li>
)

export default ListPostItem