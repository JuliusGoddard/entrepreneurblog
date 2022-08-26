import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/head'

const About = () => {
    return (
        <div>
            <Layout>
            <Head title="about" />
            <h1>About</h1>
            <p>A little Bio about me</p>
            <Link to="/contact">Contact</Link>
            </Layout>
        </div>
    )
}

export default About