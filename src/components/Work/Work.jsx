import React from 'react'
import Container from '../Layout/Container'
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import work4 from '../../assets/work4.png'

export const Work = () => {
    const workData = [
        {
            img: work1,
            title: `Plan Product Roadmap`,
            description: `A product roadmap is a shared source of truth that outlines the vision, direction, priorities`,
            button: `Read More`
        },
        {
            img: work2,
            title: `Plan Product Roadmap`,
            description: `A product roadmap is a shared source of truth that outlines the vision, direction, priorities`,
            button: `Read More`
        },
        {
            img: work3,
            title: `Plan Product Roadmap`,
            description: `A product roadmap is a shared source of truth that outlines the vision, direction, priorities`,
            button: `Read More`
        },
        {
            img: work4,
            title: `Plan Product Roadmap`,
            description: `A product roadmap is a shared source of truth that outlines the vision, direction, priorities`,
            button: `Read More`
        },
    ]
    return (
        <div className='mt-[140px] mb-[140px]'>
            <Container>
                <div>
                    <div className='text-center mb-20'>
                        <h6 className='font-sans font-medium text-5 text-[#FF7364]'>Our Services</h6>
                        <h3 className='font-chivo font-bold text-[46px] leading-[58px] text-headingColor mt-1'>How It Works</h3>
                    </div>
                    <div className='flex justify-between transition-all ease-in-out duration-500'>
                        {
                            workData.map((item)=>(
                                <div className=' group w-[330px] border border-[#DCE7FE] rounded-[10px] p-9 hover:bg-primary'>
                                    <img src={item.img} alt='WORK1'/>
                                    <h4 className='font-chivo font-bold text-[22px] leading-9 text-headingColor group-hover:text-white mt-[26px] mb-2'>{item.title}</h4>
                                    <p className='font-sans text-lg leading-[26px] mb-[26px] text-paraColor group-hover:text-white'>{item.description}</p>
                                    <a className='font-sans font-medium text-lg leading-[26px] text-primary group-hover:text-white inline-flex items-center gap-2'>{item.button}
                                    <i className="fa-solid fa-arrow-right-long text-[18px]"></i>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-[185px] mx-auto py-5 px-[48px] text-primary border rounded-[5px] mt-[80px] hover:bg-primary hover:text-white'>
                        <a className='' href="">View More</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}
