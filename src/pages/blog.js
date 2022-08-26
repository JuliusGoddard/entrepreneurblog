import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

import * as blogStyles from './blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost
      (sort: {
        fields: publishedDate,
        order:DESC
      })
      {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }

    }
    `)

   
       return (
        
        <Layout>
          <Head title="blog" />
        <div>
          
            <h1>Blog</h1>
           
           <ol className={blogStyles.posts}>
{data.allContentfulBlogPost.edges.map(a => <li className={blogStyles.post} key={a.node.publishedDate}><a href={`/blog/${a.node.slug}`}><h2>{a.node.title}</h2></a><p>{a.node.publishedDate}</p></li>
)}
           </ol>
           
        </div>
        </Layout>
    )
}

export default BlogPage