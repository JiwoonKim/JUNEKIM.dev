import React from 'react'
import { Link } from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faFolderOpen, faTags, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import './menu.css'

const SidebarMenu = () => {
    library.add(faHome, faUserAlt, faFolderOpen, faTags, faStickyNote);

    return (
        <nav className ="sidebar-menu">
            <section className="link-panel">
                <Link to="/"><FontAwesomeIcon className="sidebar-menu-icon" icon="home" /></Link>
                <Link to="/about"><FontAwesomeIcon className="sidebar-menu-icon" icon="user-alt" /></Link>
                <Link to="/tags"><FontAwesomeIcon className="sidebar-menu-icon" icon="folder-open" /></Link>
                <Link to="/postlist"><FontAwesomeIcon className="sidebar-menu-icon" icon="sticky-note" /></Link> 
            </section>
        </nav>
    )
}

export default SidebarMenu;