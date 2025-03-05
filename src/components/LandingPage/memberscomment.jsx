import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import img1 from "../../assets/upcomingimg.svg";

const membersData = [
  {
    image: img1,
    name: "Adetola Adebayo",
    comment:
      "Joining this community has been one of the best decisions of my tech journey! The discussions are insightful, and the members are always willing to help. Whether you’re a beginner or an expert, there’s always something new to learn. It’s a goldmine of knowledge",
  },
  {
    image: img1,
    name: "Greg Amanda",
    comment:
      "I love how everyone in this community is so supportive. Whenever I face challenges in coding or troubleshooting, I get quick responses and helpful solutions. The only thing I’d suggest is more structured mentorship programs, but overall, it's a fantastic space for tech lovers.",
  },
  {
    image: img1,
    name: "Bryan Brown",
    comment:
      "Being part of this tech community has opened doors I never imagined. I’ve connected with like-minded individuals, collaborated on projects, and even landed a freelance gig through a connection here. It’s more than just a group—it’s a family of tech enthusiasts!",
  },
  {
    image: img1,
    name: "Adetola Adebayo",
    comment:
      "Joining this community has been one of the best decisions of my tech journey! The discussions are insightful, and the members are always willing to help. Whether you’re a beginner or an expert, there’s always something new to learn. It’s a goldmine of knowledge",
  },
  {
    image: img1,
    name: "Greg Amanda",
    comment:
      "I love how everyone in this community is so supportive. Whenever I face challenges in coding or troubleshooting, I get quick responses and helpful solutions. The only thing I’d suggest is more structured mentorship programs, but overall, it's a fantastic space for tech lovers.",
  },
  {
    image: img1,
    name: "Bryan Brown",
    comment:
      "Being part of this tech community has opened doors I never imagined. I’ve connected with like-minded individuals, collaborated on projects, and even landed a freelance gig through a connection here. It’s more than just a group—it’s a family of tech enthusiasts!",
  },
];

const Memberscomment = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-8 md:px-20">
      <div className="text-center mb-6">
        <h2 className="text-[24px] font-bold">Community Members Review</h2>
        <p className="font-normal text-[20px]">
          Here are a few success stories from our community members whose lives we have impacted
        </p>
      </div>

      <div className="max-w-[1024px] w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {membersData.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <AnimatedCard item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const AnimatedCard = ({ item, index }) => {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      animate={{ x: isInView ? 0 : index % 2 === 0 ? -100 : 100, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col justify-center gap-4 items-start p-4 w-[300px] h-[350px] bg-gray-300 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-2">
        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full" />
        <p className="font-bold text-[20px]">{item.name}</p>
      </div>
      <p className="text-[16px] text-center">{item.comment}</p>
    </motion.div>
  );
};

export default Memberscomment;
