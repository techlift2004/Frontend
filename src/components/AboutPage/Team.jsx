import React from 'react'
import teamImg from '../../assets/Ellipse 27.svg'

const Team = () => {
    const teamData = [
        {
            teamTitle: 'Liam Carter',
            teamRole: 'Lead Software Engineer',
            teamImg: teamImg,
            teamBio: 'A highly skilled full-stack developer with over a decade of experience in building scalable applications. Passionate about writing clean code and mentoring young developers to excel in their careers.'
        },
        {
            teamTitle: 'Sophia Bennett',
            teamRole: 'Head of Design',
            teamImg: teamImg,
            teamBio: 'A creative visionary with a knack for crafting intuitive user experiences. She leads the design team with a focus on aesthetics, usability, and branding to create seamless digital products.'
        },
        {
            teamTitle: 'Elijah Brooks',
            teamRole: 'Data Scientist',
            teamImg: teamImg,
            teamBio: 'A data-driven professional who specializes in machine learning and artificial intelligence. With a background in statistics and predictive modeling, he transforms raw data into actionable insights.'
        },
        {
            teamTitle: 'Olivia Chang',
            teamRole: 'Marketing Strategist',
            teamImg: teamImg,
            teamBio: 'A results-oriented marketing expert known for crafting compelling campaigns that drive engagement and growth. She has a deep understanding of consumer behavior and digital advertising trends.'
        },
        {
            teamTitle: 'Noah Richardson',
            teamRole: 'Cybersecurity Analyst',
            teamImg: teamImg,
            teamBio: 'An expert in ethical hacking and network security, dedicated to protecting organizations from cyber threats. He designs robust security protocols and educates teams on best security practices.'
        },
        {
            teamTitle: 'Emma Foster',
            teamRole: 'Product Manager',
            teamImg: teamImg,
            teamBio: 'A strategic thinker who bridges the gap between business needs and technical implementation. She works closely with engineers and designers to build products that solve real-world problems.'
        }
    ];
    
    return (
        <div>
            <h1 className="text-center font-extrabold text-4xl my-10 mb-20">Meet The Team</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-28 items-start justify-between p-10'>
                {
                    teamData.map((item, index)=>{
                        return(
                            <div key={index}>
                                <div>
                                    <div className='bg-[#4B0082] w-full h-8'></div>
                                    <div className='p-7'>
                                        <img src={item.teamImg} alt="techlift-agent" className='mx-auto'/>
                                        <h1 className='mt-5 font-bold text-[24px] text-center font-poppins'>{item.teamTitle}</h1>
                                        <h2 className='mt-5 font-bold text-[24px] text-center font-poppins'>{item.teamRole}</h2>
                                        <p className='max-w-[40rem] font-montserrat text-center mt-5'>
                                            {item.teamBio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Team
