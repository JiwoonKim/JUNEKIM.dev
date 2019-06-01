import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListPostItem = ( { post } ) => (
    <li className="list-item">
        <Link to={post.path}>
          <h2>{post.title}</h2>
          <small>
            <FontAwesomeIcon icon="calendar-alt" />
            <span className="list-item-date">{post.date}</span>
          </small>
        </Link>
    </li>
)

export default ListPostItem