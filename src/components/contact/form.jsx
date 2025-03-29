import React from 'react'
import img1 from '../../assets/Frame 47.svg'
import img2 from '../../assets/Frame 48.svg'
import img3 from '../../assets/Frame 49.svg'
import img4 from '../../assets/Frame 50.svg'
import img5 from '../../assets/Frame 51.svg'
import img6 from '../../assets/Frame 52.svg'
import img7 from '../../assets/contact-hero.png'


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

const Form = () => {
  return (


    <div className='pt-[40px] flex flex-col xl:flex-row justify-center items-center px-[10px] md:px-20 bg-[#ffffff] gap-10 xl:gap-[180px] md:pb-[40px]  '>
        <div className='bg-[#4B0082] flex flex-col justify-center items-center  xl:items-start w-full xl:w-[422px] h-[635px] space-y-[40px] md:gap-0 px-5 md:px-20 xl:pt-20  rounded-[20px]'>
           {/* <div className='flex flex-col justify-center gap-4 items-center xl:items-start'>
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
            </div> */}
            <img src={img7} alt="" />
       
        </div>

        <form className='flex flex-col gap-3 xl:gap-7 pb-[10px] xl:px-0'>
            <h2 className='font-bold text-[24px]'>Send us a message</h2>
            <lable className='flex flex-col gap-4 justify-center items-start '>
                <p className='font-normal text-[16px]'>Full name</p>
                <input type='text' placeholder='Akinrinde Joel' className=' w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
            </lable>

            <lable className='flex flex-col gap-4 justify-center items-start '>
                <p className='font-normal text-[16px]'>Email address</p>
                <input type='email' placeholder='example123@gmaiol.com' className='w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
            </lable>

            <lable className='flex flex-col gap-4 justify-center items-start '>
                <p className='font-normal text-[16px]'>Message</p>
                <textarea type='text' placeholder='Enter Your Message' className='w-full xl:w-[546px] h-[172px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
            </lable>

            <button className='w-full xl:w-[546px] h-[72px] bg-[#4B0082] outline-none text-white  rounded-[10px] px-4 '>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form;
