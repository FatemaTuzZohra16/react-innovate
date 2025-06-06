import React from 'react'
import Container from '../Layout/Container'
import business1 from '../../assets/business1.png'
import business2 from '../../assets/business2.png'
import business3 from '../../assets/business3.png'

export const Business = () => {
    const businessData =[
        {
            img: business1,
            subtitle:'Personal',
            title: '$10/mth',
            description: 'Annual pricing',
            highlight: ' (save 20%)',
            listitems:[
                'Calendar View',
                'Custom Templates',
                'list view',
                'board view',
                'Assignees & Due Dates'
            ],
            button: 'Purchase Now'
        },
        {
            img: business2,
            subtitle:'Team',
            title: '$25/mth',
            description: 'Annual pricing',
            highlight: ' (save 35%)',
            listitems:[
                'Timeline Review',
                'Custom fields',
                'Custom Templates',
                'Task dependencies',
                'Milestones Manage'
            ],
            button: 'Purchase Now'
        },
        {
            img: business3,
            subtitle:'Enterprise',
            title: '$50/mth',
            description: 'Annual pricing',
            highlight: ' (save 40%)',
            listitems:[
                'Data export & deletion',
                'Block native integrations',
                'Custom branding',
                'Lock custom fields',
                'Priority support'
            ],
            button: 'Purchase Now'
        }
    ]
  return (
    <div className='sm:w-auto md:mb-[160px] mb-[70px]'>
        <Container>
            <div className='text-center'>
                <h2 className='w-auto md:w-[624px] mx-auto font-chivo font-bold md:text-[46px] sm:text-[43px] text-[30px] md:leading-[58px] leading-[40px] text-headingColor'>Pricing Designed To Fit Your Business</h2>
                <p className='font-chivo font-bold md:text-[24px] text-[20px] text-primary md:mt-[39px] mt-5 md:mb-[77px] mb-5'>Monthly</p>
                <div className='lg:flex justify-between lg:gap-6 xl:gap-0'>
                    {
                        businessData.map((item)=>(
                            <div className=' group w-auto md:w-[450px] py-10 px-[60px] hover:bg-primary border border-[#DCE7FE] rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all ease-in-out duration-500 mb-5 lg:mb-0 md:mx-auto lg:mx-0'>
                                <img className='m-auto' src={item.img} alt="" />
                               <h4 className='mt-8 mb-[2px] font-chivo font-bold text-2xl leading-9 text-primary group-hover:text-saas'>{item.subtitle}</h4> 
                               <h2 className='font-chivo font-bold text-[44px] leading-[54px] text-headingColor group-hover:text-white'>{item.title}</h2>
                               <p className='group-hover:text-white mt-[14px] mb-10 font-sans font-medium text-lg leading-[18px] text-mixedColor'>{item.description}
                                <span className='text-primary group-hover:text-saas'>{item.highlight}</span>
                               </p>
                               <ul className='text-left sm:text-center md:text-left sm:mx-auto md:mx-0'>
                               {item.listitems.map((li)=>(
                                <li className='w-[269px] mb-[26px] font-sans font-medium text-lg leading-8 text-mixedColor group-hover:text-white  flex items-center'>
                                  <div className='w-6 h-6 flex items-center justify-center  mr-[22px] rounded-[50%] text-primary bg-[#F4EBFF]'>
                                  <i className="fa-solid fa-check"></i>
                                    </div>{li} 
                                </li>
                            ))}
                               </ul>
                              <div className='group-hover:bg-saas group-hover:text-headingColor bg-primary sm:py-5 py-4 lg:px-[70px] sm:px-[100px] px-[60px] font-sans font-medium sm:text-lg text-[16px] leading-5 text-white mt-[14px] rounded-[10px]'>
                              <a href="">{item.button}</a>
                              </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    </div>
  )
}
