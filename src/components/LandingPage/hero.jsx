import React from "react";
import { motion } from "framer-motion";
import heroimg from "../../assets/Group 49.svg";

export default function Hero() {
  return (
    <div className="flex flex-col xl:flex-row justify-center gap-10 md:gap-0 items-center px-5 md:px-20 xl:pt-20 pt-36">
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#F5F5F5] flex flex-col justify-center gap-4 items-center xl:items-start"
      >
        <h1 className="md:text-[40px] text-[32px] text-[#000000] font-bold md:w-[500px] text-center xl:text-start">
          Building a brighter Tech future together
        </h1>
        <p className="md:text-[26px] text-[20px] text-[#000000] font-normal md:w-[422px] text-center xl:text-start">
          From Passion to Progress: Uplifting Talent Through Tech, Nurturing Innovation, and Creating Limitless Opportunities for a Brighter Future
        </p>
        <button className="bg-[#4B0082] text-[#FFFFFF] w-[201px] h-[64px] rounded-[8px]">
          Join our community
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <motion.img
          src={heroimg}
          alt="heroimg"
          className="md:h-[600px]"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
