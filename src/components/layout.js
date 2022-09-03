import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as layoutStyles from './layout.module.scss'



const Layout = (props) => {

    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
            <Header />
            <br />
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
