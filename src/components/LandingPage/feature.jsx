import React from 'react';

const featureData = [
  { count: '100+', label: 'Community members' },
  { count: '10', label: 'Webinars' },
  { count: '15', label: 'Workshops' },
  { count: '20', label: 'Meet ups' }
];

const Feature = () => {
  return (
    <div className='bg-[#4B0082] w-[100%] h-[100px] text-[#000000] flex flex-row justify-evenly items-center py-5'>
      {featureData.map((item, index) => (
        <div key={index} className='flex flex-col justify-center gap-2 items-center'>
          <h1 className='font-bold text-[15px] text-white md:text-[24px] font-montserrat '>{item.count}</h1>
          <p className='font-normal text-[10px] text-white md:text-[16px] font-montserrat'>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Feature;
