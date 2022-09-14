import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Nav from 'react-bootstrap/Nav';
import '../styles/styles.scss'
import logo from '../images/logo.png'
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
        <div class="container justify-items-end bg-fuchsia-900 py-2 min-w-full">
      
            <ul class="flex flex-row-reverse">
            <li className={headerStyles.li}><Link class="text-white font-bold  mx-4 align-middle" className={headerStyles.headerlinks}  to="/Contact">Contact</Link></li>
            <li className={headerStyles.li}><Link class="text-white font-bold  mx-4" className={headerStyles.headerlinks} to="/blog">Blog</Link></li>
            <li className={headerStyles.li}><Link class="text-white font-bold mx-4" className={headerStyles.headerlinks} to="/about">About</Link></li>
        <li className={headerStyles.li}><Link class="text-white font-bold mx-4" className={headerStyles.headerlinks} to="/Index">Home</Link></li>
        <img class="h-20 mr-auto" src={logo} alt="ggg"></img>
       
       
        
       
        </ul>
<<<<<<< HEAD
        </div>
</div>
=======
        </Nav>

     </div>
>>>>>>> 8534937e3a03f1d8b505cd7afa5d3dc3d428b595
  
    )
}

export default Header