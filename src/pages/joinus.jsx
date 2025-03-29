import { useState } from "react";
import img1 from '../assets/Frame 47.svg'
import img2 from '../assets/Frame 48.svg'
import img3 from '../assets/Frame 49.svg'
import img4 from '../assets/Frame 50.svg'
import img5 from '../assets/Frame 51.svg'
import img6 from '../assets/Frame 52.svg'
import img7 from '../assets/Gemini_Generated_Image_ikv7c3ikv7c3ikv7-removebg-preview.png' 


const social = [
    {
        image: img1,
        link: "techliftoffical",
    },

    {
        image: img2,
        link: "techliftofficial",
    },

    {
        image: img3,
        link: "@techliftteam",
    },

    {
        image: img4,
        link: "@techliftteam",
    },

    {
        image: img5,
        link: "09178098654",
    },

    {
        image: img6,
        link: "Techliftofficial@gmail.com",
    },

]



const Joinus = () => {
    const [isOpen, setIsOpen] = useState(false);
  return(
  <div className=' h-[100vh] grid grid-cols-2 place-items-center px-[10px] md:px-20 bg-[#ffffff] gap-20  '>
      <div className=' place-items-center w-full xl:w-[422px] h-[535px] px-5 md:px-20   rounded-[20px]'>
      <img src={img7} alt="" className="max-w-fit h-[100%]"/>
     
      </div>

      <form className='flex flex-col gap-3 xl:gap-4 pb-[10px] xl:px-0 '>
          <h2 className='font-bold text-[24px]'>Join Our Community</h2>
          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Full name</p>
              <input type='text' placeholder='Akinrinde Joel' required className=' w-full xl:w-[546px] h-[62px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
          </lable>

          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Email address</p>
              <input type='email' placeholder='example123@gmaiol.com' required className='w-full xl:w-[546px] h-[62px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
          </lable>

          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Phone Number</p>
              <input type='phone' placeholder='0806093452' required className='w-full xl:w-[546px] h-[62px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
          </lable>

         

          <div className='flex flex-row gap-5'>
          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Select Stack</p>
              <select required className='w-full xl:w-[266px] h-[62px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 ' >
                <option hidden > your stack</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Product Designer</option>
                <option>Project Manager</option>
                <option>FullStack</option>

              </select>
          </lable>

          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Gender</p>
              <select className='w-full xl:w-[266px] h-[62px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 ' >
                <option hidden >Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                
              </select>
          </lable>
          </div>

       

          <button  onClick={(e) => {
          e.preventDefault(); // Prevents unwanted behavior like form submission
          setIsOpen(true);
        }} className='w-full xl:w-[546px] h-[62px] bg-[#4B0082] outline-none text-white  rounded-[10px] px-4 '>
              Submit
          </button>
      </form>


       {/* Modal */}
       {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-semibold text-green-600">✅ Details Submitted Successfully!</h2>
            <p className="mt-2 text-gray-700">Join our community to stay updated.</p>

            {/* Join Button */}
            <a
              href="https://chat.whatsapp.com/Lr5HyhTJi60EeqMgw5S2Mu" // Replace with your actual community link
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
            >
              Join the Community
            </a>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-3 text-sm text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
  </div>
)
}

export default Joinus;
