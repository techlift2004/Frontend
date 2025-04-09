import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  { 
    question: "What is Techlift?", 
    answer: "TechLift is a community that helps individuals grow in tech by providing learning opportunities, mentorship, and networking." 
  },
  { 
    question: "Who can join Techlift?", 
    answer: "Anyone interested in technology, from beginners to experienced professionals, can join TechLift." 
  },
  { 
    question: "How can I become a member of TechLift?", 
    answer: "You can become a member by signing up on our website and joining our community channels." 
  },
  { 
    question: "What learning opportunities does TechLift offer?", 
    answer: "We offer free workshops, mentorship programs, online courses, and hands-on projects." 
  },
  { 
    question: "Are the learning programs free?", 
    answer: "Yes, most of our learning programs are free to help more people get into tech." 
  },
  { 
    question: "Do I need prior experience in tech to participate?", 
    answer: "No, beginners are welcome! We provide resources to help you start from scratch." 
  },
  { 
    question: "How does TechLift help me connect with others in tech?", 
    answer: "We organize networking events, mentorship programs, and an active online community for discussions." 
  },
  { 
    question: "Can I find mentors through TechLift?", 
    answer: "Yes, we connect members with experienced mentors who guide them on their tech journey." 
  },
  { 
    question: "How do I stay updated on TechLift activities?", 
    answer: "Follow our social media channels and subscribe to our newsletter for updates." 
  },
];

export default function Faq() {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-5 px-8 md:px-20">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-[24px] font-bold text-center font-poppins">Frequently Asked Questions</h1>
        <p className="text-[16px] font-normal text-center font-poppins">
          Want to know more about us? Here are a few questions and answers to help you.
        </p>
      </div>

      {/* FAQ Items */}
      {faqs.map((faq, index) => (
        <FaqItem key={index} index={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

function FaqItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) setIsOpen(false);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="shadow rounded-[3px] bg-[#FFFFFF] text-start w-[300px] md:w-[600px] xl:w-[1040px] cursor-pointer"
    >
      {/* Question */}
      <div
        className="h-[80px] flex items-center justify-between px-10 font-poppins font-bold md:text-[20px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{question}</p>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </div>

      {/* Answer (Dropdown) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-10 pb-4 text-[16px] font-montserrat text-gray-600"
      >
        {answer}
      </motion.div>
    </motion.div>
  );
}
