import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const featureData = [
  { count: '100+', label: 'Community members' },
  { count: '10', label: 'Webinars' },
  { count: '15', label: 'Workshops' },
  { count: '20', label: 'Meet ups' }
];

const Feature = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className='bg-[#4B0082] w-full min-h-[100px] text-white flex flex-row justify-evenly items-center py-5'>
      {featureData.map((item, index) => {
        const endValue = parseInt(item.count.replace(/\D/g, ''));
        return (
          <div key={index} className='flex flex-col justify-center gap-2 items-center'>
            <h1 className='font-bold text-[15px] md:text-[24px] font-montserrat'>
              {inView ? <CountUp start={0} end={endValue} duration={2} /> : '0'}+
            </h1>
            <p className='font-normal text-[10px] md:text-[16px] font-montserrat'>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
