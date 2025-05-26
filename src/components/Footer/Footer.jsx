import React from 'react'
import Container from '../Layout/Container'
import footerlogo from '../../assets/footerlogo.png'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footericon from '../../assets/footericon.png'
import footerBg from '../../assets/footerBg.png'
export const Footer = () => {
    return (
        <section className='md:mt-[309px] mt-[100px] bg-[#F7F7FC]'>
            <Container>
               <div>
               <div className='relative pb-[30px]'>
                    <div className='absolute top-[-150px] w-full' style={{
                        backgroundImage: `url(${footerBg})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize:`cover`,
                    }}> 
                       <div className='md:flex justify-between items-center md:px-[102px] px-[20px] py-[100px] text-center md:text-left'>
                            <div className='text-white'>
                                <h2 className='w-auto md:w-[577px] font-chivo font-bold md:text-[46px] text-[37px] md:leading-[58px] leading-[47px] mb-[37px] md:mb-0'>Don’t find the answer? contact us for any query.</h2>
                            </div>
                            <div>
                                <a className='font-sans font-medium md:text-lg text-[16px] leading-5 text-headingColor bg-secondary md:py-5 py-4 md:px-[48px] px-[20px] rounded-[6px]' href="#">Contact Us</a>
                            </div>
                        </div>                     
                    </div>
                    <div className='main pt-[291px] pb-[86px] md:flex justify-between'>
                        <div className="w-[263px] logo text-center md:text-left m-auto mb-[40px] md:mb-0">
                            <img src={footerlogo} alt="footerlogo"  className='m-auto'/>
                            <p className='font-sans text-[16px] leading-[28px] text-paraColor mt-[26px] mb-6'>Build a modern and creative website with Innovate.</p>
                            <div className="icons w-[185px] flex gap-[6px] ml-[43px] md:ml-0">
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] items-center flex justify-center'><FaGoogle className='text-[16px] text-paraColor' /></div>
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] items-center flex justify-center'><FaTwitter className='text-[16px] text-paraColor' /></div>
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] items-center flex justify-center'><FaInstagram className='text-[16px] text-paraColor' /></div>
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] items-center flex justify-center'><FaLinkedin className='text-[16px] text-paraColor' /></div>
                            </div>
                        </div>
                        <div className="flex mb-[30px] md:mb-0">
                            <div className='w-[103px] md:mr-[86px] mr-[40px]'>
                                <h3 className='mb-5 font-sans font-medium text-lg leading-8 text-headingColor'>Product</h3>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Landingpages</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Pricing</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Benefits</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Features</p>
                            </div>
                            <div className='w-[146px] md:mr-[81px] mr-[35px]'>
                                <h3 className='mb-5 font-sans font-medium text-lg leading-8 text-headingColor'>Company</h3>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>About</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Privacy Policy</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Terms & Conditions</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Partners</p>
                                <p className='font-sans text-[16px] leading-[26px] text-paraColor'>Contact</p>
                            </div>
                            <div className='w-[162px]'>
                                <h3 className='mb-5 font-sans font-medium text-lg leading-8 text-headingColor'>Resources</h3>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Guides and resources</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Blog</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Tools</p>
                                <p className='mb-3 font-sans text-[16px] leading-[26px] text-paraColor'>Support</p>
                            </div>
                        </div>
                        <div className="input w-[285px] text-center md:text-left m-auto mb-[40px] md:mb-0">
                            <h2 className='font-sans font-medium text-lg leading-8 text-headingColor'>Get Latest Updates</h2>
                            <p className='font-sans text-[16px] leading-[26px] text-paraColor pt-[18px] pb-[32px]'>Subscribe to our newsletter and get many interesting things every week</p>
                            <div className='w-[269px] border-2 border-[#D2D2D2] rounded-[5px] relative'>
                                <input type="text" placeholder='Your Email Address' className='font-poppins text-[12px] leading-[150%] text-[#A1A2A3] pt-[16px] pb-3 pl-[18px]' />
                                <div className='w-[36px] h-[36px] bg-primary rounded-[6px] border-[.85px] border-[#D2D2D2] right-[5px] top-[5px] absolute'>
                                    <img src={footericon} alt="footericon" className='px-[9px] py-[12px] ' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='font-inter text-lg leading-5 pt-6 text-paraColor border-t-4 border-[#D2D2D2]'>© 2024 Innovate - All Right Reserved</p>
                </div>
               </div>
            </Container>
        </section>
    )
}
