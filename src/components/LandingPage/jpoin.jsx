import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function jpoin() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/join")
  }  


  return (
  <div className='bg-[#F5F5F5] flex flex-col justify-center items-center px-[10px] md:px[0px] py-10'>
      <div className='bg-[#4B0082] w-full md:w-[75%] h-[300px] text-[#ffffff] space-y-7  place-content-center  place-items-center rounded-[20px]  py-5'>
     <p className='font-bold md:text-[30px] text-[20px] md:w-[600px] text-center font-poppins  '>Looking to Connect with Other Techies in your field?</p>
     <button onClick={handleClick} className='font-medium md:text-[23px] cursor-pointer text-[#4B0082] bg-[#ffffff] rounded-[10px] w-[200px] md:w-[400px] h-[60px] font-montserrat '>Join the Community</button>
    </div> 
  </div>
  )
}
