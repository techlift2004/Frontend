import React from 'react'
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom"


export default function footer() {
  return (
    <div className='flex flex-col justify-center items-center px-10 md:px-20px bg-[#F5F5DC] py-20'>

      <div className='py-4 flex flex-col gap-10 md:flex-row justify-center items-center md:items-start xl:gap-36 overflow-hidden'>
        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-start '>TechLift</h1>
          <p className='text-[16px] font-normal text-center md:text-start w-[240px]  '>Welcome to TechLift, a place where we build brighter tech future together</p>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-center md:text-start'>Quick Links</h1>
          <ul className='flex flex-col justify-center items-start gap-4'>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px]  '>FAQs</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px]  '>Blogs</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px]  '>Upcoming Events</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px]  '>Contact Us</Link>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-center md:text-start'>Connect</h1>
          <ul className='flex flex-col justify-center items-center md:items-start gap-4'>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center place-content-center md:place-content-start gap-2 '><AiOutlineFacebook className='' />Facebook</Link>
            <Link to=''i className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaWhatsapp />Whatsapp</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start'><FaInstagram />Instagram</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><CiLinkedin />Linkedin</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaXTwitter />Twitter</Link>
          </ul>
        </div>


      </div>



     <hr className='border-[2px] w-[100%]'/>



      <div className='flex flex-row justify-center items-center gap-4 py-4 '>
        <p className='text-[16px] font-normal text-start   ' >Copyright </p>

        <FaRegCopyright />

        <p className='text-[16px] font-normal text-start   '>2025 TechLift</p>

        <p className='text-[16px] font-normal text-start   '>| All rights reserved</p>
      </div>


    </div>
  )
}
