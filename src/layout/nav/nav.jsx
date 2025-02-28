import React, { useState } from 'react';
import Logo from '../../assets/tech lift copy 4 1.svg';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-row justify-between items-center px-8 bg-[#FFFFFF] h-[100px] w-[100%] overflow-hidden fixed z-10">
      <img src={Logo} alt="logo" className="w-[90px] h-[90px]" />

     
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-2"
      >
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

     
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="flex justify-end p-4">
         
          <button
            onClick={closeMenu}
            className="text-black text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <ul className="flex flex-col space-y-4 text-black text-[16px] font-normal py-8 pl-8">
          <li className="text-[16px] font-normal cursor-pointer">Home</li>
          <li className="text-[16px] font-normal cursor-pointer">About Us</li>
          <li className="text-[16px] font-normal cursor-pointer">Blog</li>
          <li className="text-[16px] font-normal cursor-pointer">FAQs</li>
          <li className="text-[16px] font-normal cursor-pointer">Contact Us</li>
          <li className="text-[16px] font-normal cursor-pointer md:hidden">Sponsor Us   </li>
        </ul>
      </div>

     
      <button className="bg-[#4B0082] h-[54px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer hidden md:block">
        Sponsor Us
      </button>
    </div>
  );
}
