import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import '../styles/global.css'

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
            body {
              raw
              references {
                file {
                  url
                }
              }
            }
          }
        }
      }

    }
    `)

   
       return (
        
        <Layout>
          <Head title="blog" />
        <div>
          
        <div className="outermainbox">
 <div className="mainbox">
          <h1 class="text-5xl text-white">Blog</h1>
          
       
</div>
</div>
           
           <ol className={blogStyles.posts}>
{data.allContentfulBlogPost.edges.map(a => <li className={blogStyles.post} key={a.node.publishedDate}><a href={`/blog/${a.node.slug}`}><h2 class="text-2xl">{a.node.title}</h2></a><p class="px-6">{a.node.publishedDate}</p></li>
)}
           </ol>
           
        </div>
        </Layout>
    )
}

export default BlogPage