import React from "react";
import { motion, useInView } from "framer-motion";

const texts = [
  { title: "What is Techlift" },
  { title: "Who can join Techlift" },
  { title: "How can I become a member of TechLift ?" },
  { title: "What Learning opportunities does TechLift offer" },
  { title: "Are the learning programs free ?" },
  { title: "Do I need prior experience in tech to participate ?" },
  { title: "How does TechLift help me connect with others in tech ?" },
  { title: "Can I find mentors through TechLift ?" },
  { title: "How do I stay updated on TechLift activities ?" },
];

export default function Faq() {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-5 px-8 md:px-20">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-[24px] font-bold text-center">Frequently Asked Questions</h1>
        <p className="text-[16px] font-normal text-center">
          Want to know more about us? Here are a few questions and answers to help you.
        </p>
      </div>

      {/* FAQ Items */}
      {texts.map((text, index) => (
        <FaqItem key={index} index={index} title={text.title} />
      ))}
    </div>
  );
}

function FaqItem({ title, index }) {
  const ref = React.useRef();
  const [inView, setInView] = React.useState(false);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  React.useEffect(() => {
    if (isInView) setInView(true);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="shadow rounded-[3px] bg-[#FFFFFF] text-start w-[300px] md:w-[600px] xl:w-[1040px] h-[102px] flex items-center cursor-pointer"
    >
      <p className="px-10 font-bold text md:text-[25px]">{title}</p>
    </motion.div>
  );
}
