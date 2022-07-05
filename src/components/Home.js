import React from 'react'
import About from './About'
import Contact from './Contact'
import Cta from './Cta'
import Feature from './Feature'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Team from './Team'
import '../App.css'

const Home = () => {
  return (
    <div id='home'>
      
      <Hero/>
      <About/>
      <Services/>
      <Feature/>
      <Cta/>
      <Team/>
      <Contact/>
      <Footer/>
      
      
     
    </div>
  )
}

export default Home