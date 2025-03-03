import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/Group 49.svg";
import img2 from "../../assets/Group 49.svg";
import img3 from "../../assets/Group 49.svg";

const blogData = [
  {
    image: img1,
    date: "10th Jan",
    title: "How To Protect Your Devices",
    description:
      "In today’s digital world, protecting your devices is more important than ever. Cyber threats ...",
    author: "Faith Praise",
    category: "Tech",
    readTime: "3 mins",
  },
  {
    image: img2,
    date: "10th Jan",
    title: "Getting A Job In Tech",
    description:
      "In today’s digital world, protecting your devices is more important than ever. Cyber threats ...",
    author: "Faith Praise",
    category: "Tech",
    readTime: "3 mins",
  },
  {
    image: img3,
    date: "10th Jan",
    title: "Why You Should Join A Tech Community",
    description:
      "In today’s digital world, protecting your devices is more important than ever. Cyber threats ...",
    author: "Faith Praise",
    category: "Tech",
    readTime: "3 mins",
  },
];

const Blog = () => {
  return (
    <div className="flex justify-center items-center py-14 px-6 md:px-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl"
      >
        {blogData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100  h-[600px] rounded-xl shadow-md overflow-hidden p-5">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
                <span className="absolute w-[90px] h-[90px] bottom-[-40px] left-5 bg-[#4B0082] text-white px-7 py-5 rounded-full text-[16px] font-normal">
                  {item.date}
                </span>
              </div>

              <div className="mt-14 flex flex-col gap-10">
                <div className="flex items-center gap-10 text-gray-600 text-sm">
                  <span className="flex items-center">
                    <i className="fas fa-user mr-1"></i> {item.author}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-tag mr-1"></i> {item.category}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-clock mr-1"></i> {item.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[24px] ">{item.title}</h3>
                <p className="text-gray-600 text-[16px] font-normal">{item.description}</p>
                <button className="mt-4 w-[100px] h-[40px]  bg-[#4B0082] text-white  rounded-lg text-[16px] font-normal">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
