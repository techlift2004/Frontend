import React from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/LandingPage/hero'
import Feature from '../components/LandingPage/feature'
import About from '../components/LandingPage/about'
import Upcoming from '../components/LandingPage/upcoming'
// import Footer from '../layout/footer/footer'

export default function langing() {
  return (
    <div className="bg-[#F5F5F5] ">
      <Nav />
      <Hero />
      <Feature />
      <About />
      <Upcoming />
      
      

    </div>
  )
}
