import React from 'react';

const featureData = [
  { count: '100+', label: 'Community members' },
  { count: '10', label: 'Webinars' },
  { count: '15', label: 'Workshops' },
  { count: '20', label: 'Meet ups' }
];

const Feature = () => {
  return (
    <div className='bg-[#F5F5DC] w-[100%] h-[100px] text-[#000000] flex flex-row justify-evenly items-center py-5'>
      {featureData.map((item, index) => (
        <div key={index} className='flex flex-col justify-center gap-2 items-center'>
          <h1 className='font-bold text-[18px] md:text-[24px]'>{item.count}</h1>
          <p className='font-normal text-[15px] md:text-[16px]'>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Feature;
