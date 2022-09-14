import React from 'react'
import { Link } from 'gatsby'
import '../styles/styles.scss'
import logo from '../images/logo.png'
import * as headerStyles from './header.module.scss'
 
const Header = () => {

    return (
    
        <div>
        <div class="container justify-items-end bg-fuchsia-900 py-2 min-w-full fixed inset-x-0 z-40">
      
            <ul class="flex flex-row-reverse">
            <li className={headerStyles.li}><Link class="text-white font-bold  mx-4 align-middle" className={headerStyles.headerlinks}  to="/Contact">Contact</Link></li>
            <li className={headerStyles.li}><Link class="text-white font-bold  mx-4" className={headerStyles.headerlinks} to="/blog">Blog</Link></li>
            <li className={headerStyles.li}><Link class="text-white font-bold mx-4" className={headerStyles.headerlinks} to="/about">About</Link></li>
        <li className={headerStyles.li}><Link class="text-white font-bold mx-4" className={headerStyles.headerlinks} to="/Index">Home</Link></li>
        <img class="h-20 mr-auto" src={logo} alt="ggg"></img>
       
       
        
       
        </ul>
        </div>
</div>
  
    )
}

export default Header