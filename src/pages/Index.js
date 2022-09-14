import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { graphql, useStaticQuery } from 'gatsby'
import * as headerStyles from '../components/header.module.scss'
import pic02 from '../images/pic02.jpg'
import '../styles/global.css'
import pic14 from '../images/pic14.jpg'
import pic10 from '../images/pic10.jpg'
import pic12 from '../images/pic12.jpg'
import pic13 from '../images/pic13.jpg'
import pic16 from '../images/pic16.jpg'
import { BsFillInboxesFill } from "react-icons/bs"
import { FaMicroscope } from "react-icons/fa"
import { AiFillProject } from "react-icons/ai"
import { FaBeer } from "react-icons/fa"
import { FaToolbox } from "react-icons/fa"
import { FaBalanceScaleRight } from "react-icons/fa"
import Carousel from 'react-bootstrap/Carousel';
import pic17 from '../images/pic17.jpg'
import pic18 from '../images/pic18.jpg'
import pic19 from '../images/pic19.jpg'

const IndexPage = () => {

  
  const data = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              title
          }
      }
  }
  `)

  const buttonStyle = {
    width: '20%'
  }

  const hrstyle = {
    height: '0px',
    width: '50%',
    border: 'none',
    borderTop: '10px solid red',
    marginTop: '20px'
  }

  
  const hrstyle2 = {
    height: '0px',
    width: '50%',
    margin: '0 auto',
    border: 'none',
    borderTop: '10px solid red',
    marginTop: '20px'
  }

  return (
    <div>
      <Layout>
        <Head title="home" />
  <div className="outermainbox">
 <div className="mainbox">
          <h1 className={headerStyles.titleHeader}>{data.site.siteMetadata.title}</h1>
          <Link to="/about"><button class="transition ease-in-out delay-150 bg-purple-900 text-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Learn More</button></Link>
       
</div>
</div>
<div class="container px-4 py-6 bg-white min-w-full">

<div class="flex flex-row  px-10 grid md:grid-cols-2 items-center">
  <div class="flex-none">
  <h1 class="text-5xl font-bold">What We Can Do For You</h1>
  <hr style={hrstyle} />
  <br />
  <h3 class="text-3xl font-semibold">Carving out your niche in BioPharma</h3>
  <br />
  <p>
    We are a unique company which gives you a headstart in the pharmaceutical industry</p>
    </div>
    <div class="flex place-self-end">
    <img src={pic14} alt="pic"></img>
 
    </div>
</div>

</div>    
<div class="container py-6 min-w-full">
<div class="flex flex-row grid md:grid-cols-3 gap-4 h-full py-10">
  <div class="transition ease-in-out delay-250 shadow-2xl px-10 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100">
   
    <img src={pic02} class="py-5"  alt="ss"></img>
    <h2 class="text-center text-lg font-bold">Entrepreneurial skill</h2>
  <p class="text-center my-10">Our teaching will give you a fundamental skillset required to start your own firm</p>
  </div>
  <div class="transition ease-in-out delay-250 shadow-2xl px-10 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100">

  
    <img src={pic12} class="py-5" alt="ss"></img>
    <h2 class="text-center text-lg font-bold">Consultancy Training</h2>
  <p class="text-center my-10">We will show you how consultancy is done at the highest level with real-life examples</p>
  </div>
  <div class="transition ease-in-out delay-250 shadow-2xl px-10 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100">

    <img src={pic13} class="py-5" alt="ss"></img>
    <h2 class="text-center text-lg font-bold">Insight into BioPharma</h2>
  <p class="text-center my-10">With decades of experience, we can give you a broad view of the BioPharma industry in 2022</p>
  </div>
  </div>


</div>
<div className="contactdiv">
  <div className="innercontactbox">
  <h2 class="text-5xl text-white text-center">Contact Us</h2>

  <br />
  <p class="text-center text-white">Kickstart your career in BioPharma with the Mendeleev Institute right now</p>
  <Link to="/Contact"><button class="transition ease-in-out delay-150 bg-purple-900 hover:-translate-y-1 hover:scale-110 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Contact</button></Link>
</div>
</div>
<div class="container py-10 px-4 bg-white min-w-full">
  <div class="text-center">
    <h1 class="text-5xl font-bold">Our Capabilities</h1>
    <hr style={hrstyle2} />
    <p class="text-lg mx-4 my-4">We are a diverse company with team members from all around the world who all have expertise in different areas of BioPharma</p>
  </div>
</div>
<div class="container px-4 py-6 bg-gray-100 min-w-full py-10">
<div class="grid md:grid-cols-3 gap-4">
  <div class="row-span-3 place-self-center">
    <img src={pic16} alt=""></img>
  </div>
  
  <div>
  <p class="inline-flex">< BsFillInboxesFill size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="text-2xl font-bold">Consultancy</h1></p>
    
    <p class="text-lg">The best consultancy advice from our experienced team</p>
  </div>
  <div>
  <p class="inline-flex">< FaMicroscope size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="text-2xl font-bold">Industry</h1></p>
  <p class="text-lg">High-profile connections within the pharmaceutical industry</p>
  </div>
  <div>
  <p class="inline-flex">< AiFillProject size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="text-2xl font-bold">Biochemistry</h1></p>
  <p class="text-lg">Insight into the complex nature of industrial biochemistry</p>
  </div>
  <div>
  <p class="inline-flex">< FaBeer size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="text-2xl font-bold">Fermentation</h1></p>
  <p class="text-lg">Scaling-up of microbial innovations</p>
  </div>
  <div>
  <p class="inline-flex">< FaToolbox size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="text-2xl font-bold">Business Acumen</h1></p>
  <p class="text-lg">Decades of combined experience</p>
  </div>
  <div>
  <p class="inline-flex">< FaBalanceScaleRight size={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="text-2xl font-bold">Regulation</h1></p>
  <p class="text-lg">Compliance with Health and Safety and corporate Law</p>
  </div>
</div>

</div>
<div class="container px-4 bg-white min-w-full py-10">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic17}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="text-5xl">Manage Projects</h3>
          <p>A well-managed project is the key to success</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic18}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 class="text-5xl">Work with Startups</h3>
          <p>Startups need expert help to get running</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic19}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 class="text-5xl">Master New Technology</h3>
          <p>
            We help startups optimize their technology
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

 

         </Layout>
    </div>
  )
}

export default IndexPage