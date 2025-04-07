import React, { useState } from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/LandingPage/hero'
import Feature from '../components/LandingPage/feature'
import About from '../components/LandingPage/about'
import Upcoming from '../components/LandingPage/upcoming'
import Memberscomment from '../components/LandingPage/memberscomment'
// import Blog from '../components/LandingPage/blog'
import Faq from '../components/LandingPage/faq'
import Footer from '../layout/footer/footer'
import AdminAccess from '../components/Admin/AdminAccess'

export default function Landing() {
  const [openAccess, setOpenAccess] = useState(false)

  return (
    <div className="bg-[#F5F5F5]">
      <Nav setOpenAccess={setOpenAccess} />
      <Hero />
      <Feature />
      <About />
      <Upcoming />
      <Memberscomment />
      {/* <Blog /> */}
      <Faq />
      <Footer />
      <AdminAccess openAccess={openAccess} setOpenAccess={setOpenAccess} />
    </div>
  )
}
