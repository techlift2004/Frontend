import React from 'react'


const texts =[
    {
        title: "What is Techlift",
      },
      {
        title: "Who can join Techlift",
      },
      {
        title: "How can I become a member of TechLift ?",
      },
      {
        title: "What Learning opportunities does TechLift offer",
      },
      {
        title: "Are the learning programs free ?",
      },
      {
        title: "Do I need prior experience in tech to participate ?",
      },
      {
        title: "How does techLift help me connect with others in tech ?",
      },
      {
        title: "Can I find mentors through TechLift ?",
      },
      {
        title: "How do I stay updated on techLift activities ?",
      },
]

export default function Faq() {
  return (
    <div className='flex flex-col justify-center items-center py-10 gap-5 px-8 md:px-20' >
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-[24px] font-bold text-center'>Frequently Asked Questions</h1>
        <p className='text-[16px] font-normal text-center'>Want to know more about us, here a  few questions and answers to help you</p>
      </div>
      
      {texts.map((texts, index) => (
      <div key={index} className='flex flex-col gap-10'>
        <div className='shadow rounded-[3px] bg-[#FFFFFF] text-start w-[300px] md:w-[600px] xl:w-[1040px] content-center h-[102px] '>
        <p className='px-10 font-bold text md:text-[25px]'>{texts.title}</p>
        </div>
      </div>
        ))}
    </div>
  )
}
