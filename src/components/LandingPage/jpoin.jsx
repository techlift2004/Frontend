import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function jpoin() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("https://chat.whatsapp.com/Lr5HyhTJi60EeqMgw5S2Mu")
  }  


  return (
  <div className='bg-[#F5F5F5] flex flex-col justify-center items-center py-10'>
      <div className='bg-[#4B0082] w-[75%] h-[300px] text-[#ffffff] space-y-7  place-content-center  place-items-center rounded-[20px]  py-5'>
     <p className='font-bold text-[30px] w-[600px] text-center font-poppins  '>Looking to Connect with Other Techies in your field?</p>
     <button onClick={handleClick} className='font-medium text-[23px] cursor-pointer text-[#4B0082] bg-[#ffffff] rounded-[10px] w-[400px] h-[60px] font-montserrat '>Join the Community</button>
    </div> 
  </div>
  )
}
