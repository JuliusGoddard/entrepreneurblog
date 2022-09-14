import React from 'react'

import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderRichText } from "gatsby-source-contentful/rich-text" 
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from '../components/head'
import '../styles/global.css'
import * as blogStyles from './blog.module.scss'

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
            raw
            references {
                ... on ContentfulAsset {
                    title
                    contentful_id
                    __typename
                    gatsbyImageData(width:750)
                    description
                }
            }
        }
    }
}`

const Blog = (props) => {


    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const { gatsbyImageData, description } = node.data.target
                if (!gatsbyImageData) {
                    // asset is not an image
                    return null
                }
                return (
                    <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
                )
            }
        }
    }

    return (
<Layout>
    <article>
    <Head title={props.data.contentfulBlogPost.title} />
    <div className="blogtitlediv">
        <div className="innerblogtitlebox">
        <h1 class="text-5xl text-white text-center">{props.data.contentfulBlogPost.title}</h1>
        </div>
    </div>
   
   <div class="container py-8 px-8">
   <div class="my-10 text-2xl py-10" className={blogStyles.contentStyles}>
    {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)
    &&
    renderRichText(
        props.data.contentfulBlogPost.body, options
    )}
     <p className="date" class="flex flex-row-reverse italic py-6 mx-8">{props.data.contentfulBlogPost.publishedDate}</p>
     </div>
     </div>
     </article>
</Layout>
    )
}

export default Blog