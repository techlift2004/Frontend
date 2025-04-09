import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import upcomingimg from "../../assets/upcomingimg.svg";
import { NavLink } from "react-router-dom";

const events = [
  {
    title: "Hackathon",
    description:
      "Are you a designer or a developer? Collaborate with other techies to build a product.",
    buttonText: "Register",
  },
  {
    title: "Physical meet-up",
    description:
      "The biggest tech meet-up is happening in your city! Meet other tech professionals, share ideas, and network.",
    buttonText: "Register",
  },
  {
    title: "Web Summit",
    description:
      "A global tech conference covering startups, digital marketing, AI, and emerging tech trends.",
    buttonText: "Register",
  },
  {
    title: "Hackathon",
    description:
      "Are you a designer or a developer? Collaborate with other techies to build a product.",
    buttonText: "Register",
  },
  {
    title: "Physical meet-up",
    description:
      "The biggest tech meet-up is happening in your city! Meet other tech professionals, share ideas, and network.",
    buttonText: "Register",
  },
  {
    title: "Web Summit",
    description:
      "A global tech conference covering startups, digital marketing, AI, and emerging tech trends.",
    buttonText: "Register",
  },
  {
    title: "Hackathon",
    description:
      "Are you a designer or a developer? Collaborate with other techies to build a product.",
    buttonText: "Register",
  },
  {
    title: "Physical meet-up",
    description:
      "The biggest tech meet-up is happening in your city! Meet other tech professionals, share ideas, and network.",
    buttonText: "Register",
  },
  {
    title: "Web Summit",
    description:
      "A global tech conference covering startups, digital marketing, AI, and emerging tech trends.",
    buttonText: "Register",
  },
];

const Upcoming = () => {
  const swiperRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-10 px-5 bg-[#FFFFFF] items-center place-content-center w-full"
    >
      <h2 className="text-center text-2xl font-bold font-poppins mb-6">Upcoming Events</h2>
      
      <div className="relative max-w-5xl mx-auto">
        <button className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 hidden xl:block">
          <ChevronLeft
            size={30}
            className="text-purple-800 cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </button>
        <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 hidden xl:block ">
          <ChevronRight
            size={30}
            className="text-purple-800 cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </button>

       
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                className="bg-[#4B0082] rounded-xl p-6 flex flex-col items-center text-center shadow-md
                          hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <img src={upcomingimg} alt="Event" className="w-full h-auto mb-4" />
                <h3 className="text-xl text-white font-bold font-poppins mb-3">{event.title}</h3>
                <p className="text-gray-700 text-white font-montserrat text-sm mb-4">{event.description}</p>
                <NavLink to='/events' className="border font-montserrat border-white text-white px-4 cursor-pointer py-2 rounded-lg
                                 hover:bg-purple-800 hover:text-white transition duration-300">
                  {event.buttonText}
                </NavLink>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Upcoming;
