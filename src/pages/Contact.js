import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import '../styles/global.css'
import pic24 from '../images/pic24.webp'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'



const Contact = () => {

    const hrstyle = {
        height: '0px',
        width: '50%',
        border: 'none',
        borderTop: '10px solid red',
        marginTop: '20px'
      }

    return (
        <div>
        <Layout>
            <Head title="Contact" />
            <div className="outermainbox">
 <div className="mainbox">
          <h1 class="text-5xl text-white">Contact</h1>
          
          
</div>
</div>
<div class="  container px-10 py-6 bg-white min-w-full">
    <h1 class="font-bold text-5xl">Get in Touch</h1>
    <hr style={hrstyle} />
<p class="py-4">The Mendeleev Institute is always open to consultations and new collaborators</p>
          <div class="transition ease-in-out delay-250 flex flex-row py-10 px-10 grid md:grid-cols-2 items-center shadow-2xl hover:-translate-y-1 hover:scale-110">
            <div><img src={pic24} alt="contact"></img></div>
            <div>
                <h2 class="font-bold text-2xl py-4">Contact Us</h2>
                <p class="py-2">
                <FaRegEnvelope size={20} />&nbsp; a.rostov@mendeleevinstitute.com
            </p>
            <p class="py-2">
                <FaPhoneAlt size={20} />&nbsp; 1-435-444-3324
            </p>
            <p class="py-2">
                <FaMapMarkerAlt size={20} />&nbsp; ул. Александры Монаховой, 5, корп. 2 п. Сосенское, пос, Kommunarka, Moscow, Russia, 108814
            </p>
            <h2 class="font-bold text-2xl py-4">Follow Us</h2>
            <p class="inline-flex px-2">
            <a href="https://www.facebook.com/groups/179570092154822" class="px-2 h-12 w-12" size={40}>
          <FaFacebookSquare size={30} />
          </a>
          
          <a href="https://www.youtube.com/watch?v=yuSmEXlvpy8" class="px-2 h-12 w-12">
            <FaYoutube  size={30} />
          </a>
        
          <a href="https://twitter.com/search?q=%23mendeleev" class="px-2 h-12 w-12">
          <FaTwitterSquare size={30} />
          </a>
          </p>
            </div>
          </div>
          </div>
        </Layout>
        </div>
    )
}

export default Contact