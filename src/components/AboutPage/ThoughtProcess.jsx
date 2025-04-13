import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import the hook
import thoughtImg1 from '../../assets/Rectangle 64.svg';
import thoughtImg2 from '../../assets/Rectangle 65.svg';
import thoughtImg3 from '../../assets/Rectangle 66.svg';

const ThoughtProcess = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

    return (
        <div>
            <h1 className="text-center font-extrabold text-4xl my-10 mb-28">Our Thought Process</h1>

            <div>
                <div className="flex flex-col-reverse md:flex-col md:flex-row gap-16 items-center justify-between mb-[7rem]">
                    <div>
                        <h1 className="mb-10 font-bold text-[24px] font-poppins">Life is hard already, getting into tech shouldn't</h1>
                        <p className="max-w-[40rem] font-poppins">
                        You don't need a computer science degree or years of coding to start a tech career. With the right guidance, anyone can break in—whether you're a student, a stay-at-home parent, or someone switching careers.
                        </p>
                    </div>
                    <img
                        src={thoughtImg1}
                        alt="techlift-thoughts"
                        ref={ref1}
                        className={`transform md:w-[13rem] lg:w-[20rem] ${inView1 ? 'slide-rotate-in' : ''}`}
                    />
                </div>

                <div>
                    <div className="flex md:flex-col-reverse flex-col md:flex-row gap-16 items-center justify-between mb-[7rem]">
                        <img
                            src={thoughtImg2}
                            alt="techlift-thoughts"
                            ref={ref2}
                            className={`transform md:w-[13rem] lg:w-[20rem] ${inView2 ? 'slide-rotate-left-in' : ''}`}
                        />
                        <div>
                            <h1 className="mb-10 font-bold text-[24px] font-poppins">Networking is the new goldmine in tech, tap it</h1>
                            <p className="max-w-[40rem] font-poppins">
                                80% of tech jobs are filled through connections, not just online applications. If you're not networking, you're leaving opportunities on the table, which is why our community is the best place for you as a techie because your next job or mentor is one network away.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col-reverse md:flex-col md:flex-row gap-16 items-center justify-between mb-[7rem]">
                        <div>
                            <h1 className="mb-10 font-bold text-[24px] font-poppins">Learn, Connect And Grow</h1>
                            <p className="max-w-[40rem] font-poppins">
                                In today's fast-paced world, learning never stops. Workshops and seminars give you the tools, insights, and connections to level up. We organize seminars and invite industry experts that share real-world experiences.
                            </p>
                        </div>
                        <img
                            src={thoughtImg3}
                            alt="techlift-thoughts"
                            ref={ref3}
                            className={`transform md:w-[13rem] lg:w-[20rem] ${inView3 ? 'slide-rotate-in' : ''}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThoughtProcess;
