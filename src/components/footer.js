import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import logo from '../images/logo.png'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {


    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
        author
          }
        }
      }     
    `)

   

    return (
      
    <footer class="bg-veryDarkBlue">
    
    <div
      class="container flex flex-col-reverse justify-between bg-fuchsia-900 px-6 py-10 mx-auto space-y-8 min-w-full md:flex-row md:space-y-0"
    >
     
      <div
        class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
      >
        <div class="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy; <p>{data.site.siteMetadata.author}</p> 2022, All Rights Reserved
        </div>
       
        <div>
          <img src={logo} class="h-20" alt="" />
        </div>
      
        <div class="flex justify-center space-x-4">
         
          <a href="https://www.facebook.com/groups/179570092154822">
          <FaFacebookSquare class="h-12 color-white" style={{color: "white"}} />
          </a>
          
          <a href="https://www.youtube.com/watch?v=yuSmEXlvpy8">
            <FaYoutube class="h-12 color-white" style={{color: "white"}} />
          </a>
        
          <a href="https://twitter.com/search?q=%23mendeleev">
          <FaTwitterSquare class="h-12 color-white" style={{color: "white"}} />
          </a>
        
                  </div>
      </div>
    
      <div class="flex justify-around space-x-32">
        <div class="flex flex-col space-y-3 text-white">
         <Link to="/Index"> <p class="hover:text-brightRed">Home</p></Link>
         <Link to="/about">  <p class="hover:text-brightRed">About</p></Link>
         <Link to="/blog"> <p class="hover:text-brightRed">Blog</p></Link>
         <Link to="/Contact"> <p class="hover:text-brightRed">Contact</p></Link>
        </div>
    
      </div>

      <div class="flex flex-col justify-between">
        <form>
          <div class="flex space-x-3">
            <input
              type="text"
              class="flex-1 px-4 rounded-full focus:outline-none"
              placeholder="Sign up for our newsletter"
            />
            <button
              class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
            >
              Go
            </button>
          </div>
        </form>
        <div class="hidden text-white md:block">
          Copyright &copy; 2022, All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer