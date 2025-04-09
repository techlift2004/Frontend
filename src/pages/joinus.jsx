import { useState } from "react";
import { signup } from "../firebase"; // adjust the path based on your file structure
import img7 from '../assets/Gemini_Generated_Image_ikv7c3ikv7c3ikv7-removebg-preview.png';

const Joinus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    stack: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, number, stack, gender } = formData;

    if (!name || !email || !number || !stack || !gender) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await signup(name, email, number); // Send data to Firestore
      window.location.href = "https://chat.whatsapp.com/Lr5HyhTJi60EeqMgw5S2Mu"; // Redirect to WhatsApp group
    } catch (err) {
      alert("An error occurred while submitting. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className='h-[100vh] grid grid-cols-2 place-items-center px-[10px] md:px-20 bg-[#ffffff] gap-20'>
      <div className='w-full xl:w-[422px] h-[535px] px-5 md:px-20 rounded-[20px] place-items-center'>
        <img src={img7} alt="" className="max-w-fit h-[100%]" />
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3 xl:gap-4 pb-[10px] xl:px-0'>
        <h2 className='font-bold text-[24px] font-poppins'>Join Our Community</h2>

        <label className='flex flex-col gap-4 items-start'>
          <p className='font-normal text-[16px] font-montserrat'>Full name</p>
          <input type='text' name="name" value={formData.name} onChange={handleChange}
            placeholder='Akinrinde Joel' required
            className='w-full xl:w-[546px] h-[62px] bg-[#D9D9D9] rounded-[10px] px-4 outline-none' />
        </label>

        <label className='flex flex-col gap-4 items-start'>
          <p className='font-normal text-[16px] font-montserrat'>Email address</p>
          <input type='email' name="email" value={formData.email} onChange={handleChange}
            placeholder='example123@gmail.com' required
            className='w-full xl:w-[546px] h-[62px] bg-[#D9D9D9] rounded-[10px] px-4 outline-none' />
        </label>

        <label className='flex flex-col gap-4 items-start'>
          <p className='font-normal text-[16px] font-montserrat'>Phone Number</p>
          <input type='tel' name="number" value={formData.number} onChange={handleChange}
            placeholder='0806093452' required
            className='w-full xl:w-[546px] h-[62px] bg-[#D9D9D9] rounded-[10px] px-4 outline-none' />
        </label>

        <div className='flex flex-row gap-5'>
          <label className='flex flex-col gap-4 items-start'>
            <p className='font-normal text-[16px] font-montserrat'>Select Stack</p>
            <select name="stack" value={formData.stack} onChange={handleChange} required
              className='w-full xl:w-[266px] h-[62px] font-montserrat bg-[#D9D9D9] rounded-[10px] px-4 outline-none'>
              <option hidden>your stack</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Product Designer</option>
              <option>Project Manager</option>
              <option>FullStack</option>
              <option>Social Media Manager</option>
              <option>Web3</option>
              <option>Cyber Security</option>
              <option>Crypto / Forex</option>
              <option>QA Tester</option>
              <option>Content Creation</option>
            </select>
          </label>

          <label className='flex flex-col gap-4 items-start'>
            <p className='font-normal text-[16px] font-montserrat'>Gender</p>
            <select name="gender" value={formData.gender} onChange={handleChange} required
              className='w-full xl:w-[266px] h-[62px] bg-[#D9D9D9] font-montserrat rounded-[10px] px-4 outline-none'>
              <option hidden>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
        </div>

        <button type="submit" className='w-full font-montserrat xl:w-[546px] h-[62px] bg-[#4B0082] text-white rounded-[10px] px-4'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Joinus;
