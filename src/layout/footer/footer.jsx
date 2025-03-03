import React from 'react'
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";


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
            <li className='text-[16px] font-normal text-center md:text-start w-[240px]  '>FAQs</li>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px]  '>Blogs</li>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px]  '>Upcoming Events</li>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px]  '>Contact Us</li>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-center md:text-start'>Connect</h1>
          <ul className='flex flex-col justify-center items-center md:items-start gap-4'>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center place-content-center md:place-content-start gap-2 '><AiOutlineFacebook className='' />Facebook</li>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaWhatsapp />Whatsapp</li>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start'><FaInstagram />Instagram</li>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><CiLinkedin />Linkedin</li>
            <li className='text-[16px] font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaXTwitter />Twitter</li>
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
