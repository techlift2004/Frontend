import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom"


export default function Footer({setOpenAccess}) {
  return (
    <div className='flex flex-col justify-center items-center px-10 md:px-20px bg-[#4B0082] pt-20'>

      <div className='py-4 flex flex-col gap-10 md:flex-row justify-center items-center md:items-start xl:gap-36 overflow-hidden'>
        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1  className='text-[24px] font-bold text-start text-white font-poppins '>TechLift</h1>
           <button onClick={()=>setOpenAccess(true)} className="lg:flex justify-center items-center m-auto hover:bg-[rgb(75,0,130)] h-[44px] w-[95px] md:w-[128px] text-[16px] font-normal hover:text-[#FFFFFF] border-2 border-[rgb(75,0,130)] text-[rgb(75,0,130)] rounded-[8px] cursor-pointer hidden md:block">
                    Admin
                  </button>
          <p className='text-[16px] font-normal text-center md:text-start text-white w-[240px] font-montserrat '>Welcome to TechLift, a place where we build brighter tech future together</p>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-center md:text-start text-white font-poppins'>Quick Links</h1>
          <ul className='flex flex-col justify-center items-start gap-4'>
            <Link to='/about' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white font-montserrat '>About Us</Link>
            <Link to='/blog' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white font-montserrat  '>Blogs</Link>
            <Link to='/events' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white font-montserrat  '>Upcoming Events</Link>
            <Link to='/contact' className='text-[16px] font-normal text-center md:text-start w-[240px] text-white font-montserrat '>Contact Us</Link>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <h1 className='text-[24px] font-bold text-center text-white md:text-start font-poppins'>Connect</h1>
          <ul className='flex flex-col justify-center items-center md:items-start gap-4'>
            <Link to='https://www.tiktok.com/@techliftteam' className='text-[16px] text-white font-montserrat font-normal text-center md:text-start w-[240px] flex flex-row items-center place-content-center md:place-content-start gap-2 '><FaTiktok className='' />TiKTok</Link>
            <Link to='' className='text-[16px] text-white font-montserrat font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaWhatsapp />Whatsapp</Link>
            <Link to='https://www.instagram.com/techlift_official' className='text-[16px] text-white font-montserrat font-normal text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start'><FaInstagram />Instagram</Link>
            <Link to='' className='text-[16px] font-normal text-center md:text-start w-[240px] font-montserrat text-white flex flex-row items-center gap-2 place-content-center md:place-content-start '><CiLinkedin />Linkedin</Link>
            <Link to='https://x.com/techliftteam' className='text-[16px] font-normal text-white font-montserrat text-center md:text-start w-[240px] flex flex-row items-center gap-2 place-content-center md:place-content-start '><FaXTwitter />Twitter</Link>
          </ul>
        </div>


      </div>



     <hr className='border-[2px] w-[100%] text-white'/>



      <div className='flex flex-row justify-center items-center gap-4 py-4 '>
        <p className='text-[16px] font-normal text-start  text-white  font-poppins ' >Copyright </p>

        <FaRegCopyright className='text-white' />

        <p className='text-[16px] font-normal text-start text-white font-poppins  '>2025 TechLift</p>

        <p className='text-[16px] font-normal text-start text-white font-poppins  '>| All rights reserved</p>
      </div>


    </div>
  )
}
