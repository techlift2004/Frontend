import React from 'react'
import Contact from '../components/contact/form'
import Nav from '../layout/nav/nav'
import heroimg from '../assets/image-removebg-preview - 2025-02-24T133112.391 1.svg'
import { motion } from "framer-motion";
import Footer from '../layout/footer/footer'

export default function contact() {
  return (
    <div>
        <Nav />
     
        <div className="flex flex-col xl:flex-row justify-center gap-10 md:gap-0 items-center bg-[#F5F5DC] px-5 md:px-20 xl:pt-20 pt-36">
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <motion.img
          src={heroimg}
          alt="heroimg"
          className="md:h-[600px] pl-20 xl:pl-0"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" flex flex-col justify-center gap-4 items-center xl:items-start pb-10 xl:pb-0"
      >
        <h1 className="md:text-[40px] text-[32px] text-[#000000] font-bold md:w-[500px] text-center xl:text-start">
         Contact Us
        </h1>
        <p className="md:text-[26px] text-[20px] text-[#000000] font-normal md:w-[422px] text-center xl:text-start">
        Starting in tech can be challenging, but you’re not alone—contact us, and we’ll walk the path with you.
        </p>
      </motion.div>

      
    </div>
        <Contact />
        <Footer />
      
    </div>
  )
}
