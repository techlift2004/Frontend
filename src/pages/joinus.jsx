import { useState } from "react";
import img1 from '../assets/Frame 47.svg'
import img2 from '../assets/Frame 48.svg'
import img3 from '../assets/Frame 49.svg'
import img4 from '../assets/Frame 50.svg'
import img5 from '../assets/Frame 51.svg'
import img6 from '../assets/Frame 52.svg'


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
  <div className='pt-[40px] flex flex-col xl:flex-row justify-center items-center px-[10px] md:px-20 bg-[#ffffff] gap-10 xl:gap-[180px] md:pb-[40px]  '>
      <div className='bg-[#F5F5DC] flex flex-col justify-center items-center  xl:items-start w-full xl:w-[422px] h-[635px] space-y-[40px] md:gap-0 px-5 md:px-20 xl:pt-20  rounded-[20px]'>
         <div className='flex flex-col justify-center gap-4 items-center xl:items-start'>
         <h2 className='font-bold text-[24px] '>Contact Information</h2>
         <p className='font-normal text-[16px]'>Reach out to us via the following means</p>
         </div>
          <div>
          {social.map((item, index) => (
              <label htmlFor="instagram" index='key' className='flex flex-row gap-14 items-center pt-[10px] cursor-pointer'>
                  <img src={item.image} alt="" />
                  <p className='font-normal text-[16px]'>{item.link}</p>
              </label>
               ))}
          </div>
     
      </div>

      <form className='flex flex-col gap-3 xl:gap-7 pb-[10px] xl:px-0'>
          <h2 className='font-bold text-[24px]'>Join Our Community</h2>
          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Full name</p>
              <input type='text' placeholder='Akinrinde Joel' className=' w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
          </lable>

          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Email address</p>
              <input type='email' placeholder='example123@gmaiol.com' className='w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
          </lable>

          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Phone Number</p>
              <input type='phone' placeholder='0806093452' className='w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
          </lable>

         

          <div className='flex flex-row gap-5'>
          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Select Stack</p>
              <select className='w-full xl:w-[266px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 ' >
                <option hidden >Pick your stack</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Product Designer</option>
                <option>Project Manager</option>
                <option>FullStack</option>

              </select>
          </lable>

          <lable className='flex flex-col gap-4 justify-center items-start '>
              <p className='font-normal text-[16px]'>Gender</p>
              <select className='w-full xl:w-[266px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 ' >
                <option hidden >Pick your stack</option>
                <option>Male</option>
                <option>Female</option>
                
              </select>
          </lable>
          </div>

       

          <button  onClick={(e) => {
          e.preventDefault(); // Prevents unwanted behavior like form submission
          setIsOpen(true);
        }} className='w-full xl:w-[546px] h-[72px] bg-[#4B0082] outline-none text-white  rounded-[10px] px-4 '>
              Submit
          </button>
      </form>


       {/* Modal */}
       {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-semibold text-green-600">✅ Details Submitted Successfully!</h2>
            <p className="mt-2 text-gray-700">Join our community to stay updated.</p>

            {/* Join Button */}
            <a
              href="https://yourcommunitylink.com" // Replace with your actual community link
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
