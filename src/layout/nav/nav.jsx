import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/tech lift copy 4 1.svg";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="flex flex-row justify-between items-center px-8 bg-[#FFFFFF] h-[64px] w-[100%] overflow-hidden fixed z-1000 shadow"
    >
      <img src={Logo} alt="logo" className="w-[90px] h-[90px]" />

      <ul className="hidden md:flex space-x-6 text-black text-[16px] font-normal">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "border-b-2 border-[#4B0082]" : "hover:text-[#4B0082]"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "border-b-2 border-[#4B0082]" : "hover:text-[#4B0082]"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "border-b-2 border-[#4B0082]" : "hover:text-[#4B0082]"
            }`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/faqs"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "border-b-2 border-[#4B0082]" : "hover:text-[#4B0082]"
            }`
          }
        >
          FAQs
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "border-b-2 border-[#4B0082]" : "hover:text-[#4B0082]"
            }`
          }
        >
          Contact Us
        </NavLink>
      </ul>

      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-2 z-30 relative"
      >
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-20 shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-black text-2xl font-bold">
            &times;
          </button>
        </div>

        <ul className="flex flex-col space-y-4 text-black text-[16px] font-normal py-8 pl-8">
          <NavLink className="cursor-pointer">Home</NavLink>
          <NavLink className="cursor-pointer">About Us</NavLink>
          <NavLink className="cursor-pointer">Blog</NavLink>
          <NavLink className="cursor-pointer">FAQs</NavLink>
          <NavLink className="cursor-pointer">Contact Us</NavLink>
          <NavLink className="cursor-pointer md:hidden">Sponsor Us</NavLink>
        </ul>
      </div>

      <button className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer hidden md:block">
        Sponsor Us
      </button>
    </motion.div>
  );
}





