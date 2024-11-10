import React from 'react'
import About from '../components/about/page'
import Navbar from '../components/navbar/page'
import Hero from '../components/hero/page'
import Skills from '../components/skills/page'

import Contact from '../components/contact/page'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      
      <Contact/>
      
      
      

    
    </div>
  )
}

export default Home