import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import * as headerStyles from '../components/header.module.scss'
import '../styles/global.css'
import pic20 from '../images/pic20.jpg'
import { FaRegHandPointRight } from 'react-icons/fa'
import pic21 from '../images/pic21.jpg'
import pic22 from '../images/pic22.jpg'
import pic23 from '../images/pic23.jpg'

const About = () => {

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
            <Head title="about" />
            <div className="outermainbox">
 <div className="mainbox">
          <h1 className={headerStyles.titleHeader}>About Us</h1>
          
       
</div>
</div>
<div class="container px-4 py-6 bg-white min-w-full">
    <div class="flex flex-row px-10 grid md:grid-cols-2 items-center">
        <div class="px 20"><img src={pic20} alt="Mendeleev"></img></div>
        <div class="flex flex-row px-20 grid">
            <h1 class="font-bold text-5xl">Our Story</h1>
            <hr style={hrstyle} />
            <p class="py-4">
                The Mendeleev Institute was established in 2008 by Anatole Rostov and Alexei Prokofiev in Moscow to provide cutting edge consultancy to BioPharma startups, but has since expanded internationally to become one of the leaders of innovation and modern science.
            </p>
            <p class="py-4">
                We have since collaborated with SMEs and industrial partners on large-scale projects, ranging from scaling-up of genetically-modifed fungi and bacteria to on-going partnerships on government and private-funded projects.
            </p>
            <p class="py-2 font-bold inline-flex">
                <FaRegHandPointRight size={20} />&nbsp; Synergy with Europe
            </p>
            <p class="py-2 font-bold inline-flex">
                <FaRegHandPointRight size={20} />&nbsp; Leaders in Biotech
            </p>
            <p class="py-2 font-bold inline-flex">
                <FaRegHandPointRight size={20} />&nbsp; Masters of Technology
            </p>
        </div>
    </div>
</div>
<div class="container py-6 min-w-full">
    <h1 class="font-bold text-5xl text-center">How we can help you</h1>
    
<div class="flex flex-row grid md:grid-cols-3 gap-4 h-full py-10">
  <div class="transition ease-in-out delay-250 shadow-2xl px-10 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100">
   
    <img src={pic21} class="py-5"  alt="ss"></img>
    <h2 class="text-center text-lg font-bold">Project Management</h2>
  <p class="text-center my-10">Our teaching will give you a fundamental skillset required to start your own firm</p>
  </div>
  <div class="transition ease-in-out delay-250 shadow-2xl px-10 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100">

  
    <img src={pic22} class="py-5" alt="ss"></img>
    <h2 class="text-center text-lg font-bold">Regulatory Assistance</h2>
  <p class="text-center my-10">We will show you how consultancy is done at the highest level with real-life examples</p>
  </div>
  <div class="transition ease-in-out delay-250 shadow-2xl px-10 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100">

    <img src={pic23} class="py-5" alt="ss"></img>
    <h2 class="text-center text-lg font-bold">Procedural Documents</h2>
  <p class="text-center my-10">With decades of experience, we can give you a broad view of the BioPharma industry in 2022</p>
  </div>
  </div>


</div>
<div className="contactdiv">
  <div className="innercontactbox">
  <h2 class="text-5xl text-white text-center">Expert Management From An Experienced, International Team</h2>

  <br />
  <p class="text-center text-white">We are always open to helping new customers, contact us now and arrange a consultation with us</p>
  <Link to="/Contact"><button class="transition ease-in-out delay-150 bg-purple-900 text-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Contact</button></Link>
</div>
</div>
          
            </Layout>
        </div>
    )
}

export default About