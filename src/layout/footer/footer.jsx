import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom"


export default function footer() {
  return (
    <div className='flex flex-col justify-center items-center px-10 md:px-20px bg-[#4B0082] py-20'>

      <div className='py-4 flex flex-col gap-10 md:flex-row justify-center items-center md:items-start xl:gap-36 overflow-hidden'>
        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-start text-white '>TechLift</h1>
          <p className='text-[16px] font-normal text-center md:text-start text-white w-[240px]  '>Welcome to TechLift, a place where we build brighter tech future together</p>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-center md:text-start text-white'>Quick Links</h1>
          <ul className='flex flex-col justify-center items-start gap-4'>
            <Link to='./about' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white  '>About Us</Link>
            <Link to='./blog' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white  '>Blogs</Link>
            <Link to='./events' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white  '>Upcoming Events</Link>
            <Link to='./contact' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white  '>Contact Us</Link>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-center text-white md:text-start'>Connect</h1>
          <ul className='flex flex-col justify-center items-center md:items-start gap-4'>
            <Link to='https://www.instagram.com/techlift_official?igsh=MWJrcWl3azY2bnNtbw==' className='text-[16px] text-white font-normal text-center md:text-start w-[240px] flex flex-row items-center place-content-center md:place-content-start gap-2 '><FaTiktok className='' />TiKTok</Link>
            <Link to='https://chat.whatsapp.com/Lr5HyhTJi60EeqMgw5S2Mu' className='text-[16px] text-white font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaWhatsapp />Whatsapp</Link>
            <Link to='https://www.instagram.com/techlift_official' className='text-[16px] text-white font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start'><FaInstagram />Instagram</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white flex flex-row items-center gap-2 place-content-center md:place-content-start '><CiLinkedin />Linkedin</Link>
            <Link to='https://x.com/techliftteam' className='text-[16px] font-normal text-white text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaXTwitter />Twitter</Link>
          </ul>
        </div>


      </div>



     <hr className='border-[2px] w-[100%] text-white'/>



      <div className='flex flex-row justify-center items-center gap-4 py-4 '>
        <p className='text-[16px] font-normal text-start  text-white  ' >Copyright </p>

        <FaRegCopyright className='text-white' />

        <p className='text-[16px] font-normal text-start text-white   '>2025 TechLift</p>

        <p className='text-[16px] font-normal text-start text-white   '>| All rights reserved</p>
      </div>


    </div>
  )
}
