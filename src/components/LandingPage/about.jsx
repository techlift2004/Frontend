import React from 'react'
import aboutimg from '../../assets/about.svg'

export default function about() {
  return (
    <div className='flex flex-col justify-center items-center py-10 gap-5 px-8 md:px-20'>
      <h1 className='font-bold text-[24px] '>About Us</h1> 
      <p className='text-center md:w-[765px] font-normal '>We are a team of techies ensuring that the next generation of techies have access to the right resources and community.  we share knowledge, and empower growth through discussions resources and networking</p>
      <div className='flex flex-col md:flex-row gap-5 items-center justify-center xl:relative xl:bottom-56'>
        <div>
            <img src={aboutimg} alt="aboutimg" className='w-[100%] h-[400px] xl:h-[800px]  ' />
        </div>
       <div className='flex flex-col gap-5'>
       <div className=''>
            <h1 className='font-bold text-[24px] text-center md:text-start '>Our Vision</h1> 
            <p className='font-normal text-center md:text-start '>To be a leading community that bridges the gap for upcoming techies inspiring a new generation of skilled and confident technology professionals equipped to transform the future</p>
        </div>
        <div>
            <h1 className='font-bold text-[24px] text-center md:text-start '>Our Mission</h1> 
            <p className='font-normal text-center md:text-start '>To empower aspiring tech enthusiasts by providing access to comprehensive resources, courses, workshops and soft skills training. Fostering growth, collaboration and innovation in technology</p>
        </div>
       </div>
      </div>

    </div>
  )
}
