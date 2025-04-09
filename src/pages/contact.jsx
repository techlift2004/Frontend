import React from 'react'
import Contact from '../components/contact/form'
import Nav from '../layout/nav/nav'
import heroimg from '../assets/image-removebg-preview - 2025-02-24T133112.391 1.svg'
import { motion } from "framer-motion";
import Footer from '../layout/footer/footer'
import Join from '../components/LandingPage/jpoin'

export default function contact() {
  return (
    <div>
        <Nav />
     
        <div className="grid grid-cols-1  lg:grid-cols-2 place-items-center h-[500px] overflow-hidden bg-[#4B0082] px-5 md:px-20 xl:pt-20 pt-36">
       
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" flex flex-col justify-center gap-4 items-center xl:items-start lg:mt-[-200px] xl:pb-0"
      >
        <h1 className="md:text-[40px] text-[32px] text-[#ffffff] font-poppins font-bold md:w-[500px] text-center xl:text-start">
        Get In Touch
        </h1>
        <p className="md:text-[26px] text-[20px] font-poppins text-[#ffffff] font-normal md:w-[422px] text-center xl:text-start">
        Got any questions or concerns?
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <motion.img
          src={heroimg}
          alt="heroimg"
          className="md:h-[600px] pt-20 lg:pt-0 pl-20 xl:pl-0"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>

      
    </div>
        <Contact />
        <Join />
        <Footer />
      
    </div>
  )
}
