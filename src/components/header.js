import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Nav from 'react-bootstrap/Nav';
import '../styles/styles.scss'

import * as headerStyles from './header.module.scss'
 
const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
    
        <div>
        <Nav variant="pills" defaultActiveKey="/home" className='justify-content-end'>
            <ul className={headerStyles.navList}>
       <Nav.Item> <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/Index">Home</Link></li></Nav.Item>
        <Nav.Item><li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li></Nav.Item>
        <Nav.Item><li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li></Nav.Item>
        <Nav.Item><li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/Contact">Contact</Link></li></Nav.Item>
        </ul>
        </Nav>

     </div>
  
    )
}

export default Header