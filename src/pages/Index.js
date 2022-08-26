import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="home" />
      <h1>Hello.</h1>
      <h2>I'm a Full Stack developer living in Scotland</h2>
          <p>Need a developer?</p> <Link to="/contact">Contact me.
          </Link><p><a href="http://twitter.com">Twitter</a></p>
         </Layout>
    </div>
  )
}

export default IndexPage