import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import upcomingimg from "../../assets/upcomingimg.svg";

const events = [
  {
    title: "Hackathon",
    description:
      "Are you a designer or a developer, collaborate with other techies to build a product",
    buttonText: "Register",
  },
  {
    title: "Physical meet up",
    description:
      "The biggest tech meet up is happening in your city, meet other tech professionals, share ideas and network",
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
      "Are you a designer or a developer, collaborate with other techies to build a product",
    buttonText: "Register",
  },
  {
    title: "Physical meet up",
    description:
      "The biggest tech meet up is happening in your city, meet other tech professionals, share ideas and network",
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
  return (
    <div className="py-10 px-5 bg-[#FFFFFF] h-[500px] items-center place-content-center w-[100%] xl:mt-[-370px] ">
      <h2 className="text-center text-2xl font-bold mb-6 ">Upcoming Events</h2>
      <div className="relative max-w-5xl mx-auto  ">
       
        <button className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer">
          <ChevronLeft size={30} className="text-purple-800 hidden xl:block" />
        </button>
        <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer">
          <ChevronRight size={30} className="text-purple-800 hidden xl:block" />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
             <div className="bg-[#F5F5DC] rounded-xl p-6 flex flex-col items-center text-center shadow-md">
                <img src={upcomingimg} alt="" />
             <div className=" flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                <button className="border border-purple-800 text-purple-800 px-4 py-2 rounded-lg">
                  {event.buttonText}
                </button>
              </div>
             </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Upcoming;
