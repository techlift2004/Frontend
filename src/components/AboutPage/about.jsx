import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutimg1 from "../../assets/Rectangle 60.svg";
import aboutimg from "../../assets/about.svg";
import ThoughtProcess from "./ThoughtProcess";
import Team from "./Team";
import Footer from "../../layout/footer/footer";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
    return (
        <>
            <div className="bg-[#4B0082] pt-36">
                <h1 className="text-center font-extrabold text-white text-5xl font-poppins">About Us</h1>
                <p className="text-center text-[1.3rem] text-white px-20 mt-8 font-poppins">
                    We are a team of techies ensuring that the next generation of techies have access to the right resources and community.  we share knowledge, and empower growth through discussions resources and networking
                </p>
                <div className="flex justify-center items-center p-5 relative top-28 m-auto max-w-[70rem] mt-[-3rem]">
                    <img src={aboutimg1} alt="About Us" className="md:w-lg h-60 w-2"/>
                    <img src={aboutimg1} alt="About Us" className="md:w-lg h-40"/>
                    <img src={aboutimg1} alt="About Us" className="md:w-lg h-60"/>
                    <img src={aboutimg1} alt="About Us" className="md:w-lg h-40"/>
                </div>
            </div>
            <motion.div
                ref={ref}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col justify-center items-center py-10 pt-36 gap-5 px-8 md:px-20"
            >
                <p className="text-center md:w-[765px] font-montserrat font-bold">
                    We ensure that as someone starting out in tech, you have  access to the right resources, seminars, work shops and tech events where you can network with professionals in tech and gain exposure that will help you grow
                </p>
            
                <div className="flex flex-col md:flex-row xl:gap-10 items-center justify-center">
                    <motion.img
                        src={aboutimg}
                        alt="About Us"
                        className="w-full max-w-[400px] xl:max-w-[600px] h-auto md:h-[400px] xl:h-[500px]"
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    />
                    
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        >
                            <h1 className="font-bold text-[24px] text-center md:text-start font-poppins">Our Vision</h1>
                            <p className="font-normal text-center xl:w-[465px] md:text-start font-poppins">
                                To be a leading community that bridges the gap for upcoming techies, inspiring a new generation of skilled and confident 
                                technology professionals equipped to transform the future.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        >
                            <h1 className="font-bold text-[24px] text-center md:text-start font-poppins">Our Mission</h1>
                            <p className="font-normal text-center xl:w-[465px] md:text-start font-poppins">
                                To empower aspiring tech enthusiasts by providing access to comprehensive resources, courses, workshops, and soft skills training. 
                                Fostering growth, collaboration, and innovation in technology.
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <ThoughtProcess />
                </div>
                <div>
                    <Team />
                </div>
            </motion.div>
            <Footer />
        </>
    );
}
