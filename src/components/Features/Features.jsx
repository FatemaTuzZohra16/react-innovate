import React from 'react'
import Container from '../Layout/Container'
import features from '../../assets/features.png'
import features1 from '../../assets/features1.png'
import features2 from '../../assets/features2.png'
import features3 from '../../assets/features3.png'

export const Features = () => {
    return (
        <div>
            <Container>
                <div className='md:mt-[160px] mt-[80px] md:mb-[55px] mb-0 md:flex justify-between md:gap-[30px] xl:gap-0'>
                    <div>
                        <img src={features} alt="features" />
                    </div>
                    <div className='md:w-[460px] lg:w-auto md:px-5 lg:px-0'>
                        <h3 className='w-auto lg:w-[553px] font-chivo font-bold lg:text-[46px] sm:text-[40px] text-[30px] lg:leading-[58px] sm:leading-[50px] leading-[40px] sm: text-center md:text-left text-headingColor'>We provide features for your Business</h3>
                        <div className='sm:flex justify-between mt-[64px] md:mt-[30px] lg-[64px] mb-10 md:mb-5 lg:mb-10 md:gap-[30px] lg:gap-0 text-center sm:text-left sm:px-[80px] md:px-0'>
                            <div className='w-[220px] gap-[96px] mx-auto sm:mx-0 mb-5 sm:mb-0'>
                                <img src={features1} alt="" className='mx-auto sm:mx-0'/>
                                <h4 className='font-chivo font-bold text-[22px] md:text-[19px] lg:text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Fast and Easy to use</h4>
                                <p className='font-sans text-lg md:text-[16px] lg:text-lg leading-8 md:leading-6 lg:leading-8 text-paracolor'>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className='w-[220px] gap-[96px] mx-auto sm:mx-0'>
                                <img src={features2} alt="" className='mx-auto sm:mx-0'/>
                                <h4 className='font-chivo font-bold text-[22px] md:text-[19px] lg:text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Safely Security</h4>
                                <p className='font-sans text-lg md:text-[16px] lg:text-lg leading-8 md:leading-6 lg:leading-8 text-paracolor'>All customer data is encrypted</p>
                            </div>
                        </div>
                        <div className='sm:flex justify-between text-center sm:text-left sm:px-[80px] md:px-0 md:gap-[30px] lg:gap-0'>
                        <div className='w-[220px] gap-[96px] mx-auto sm:mx-0'>
                                <img src={features3} alt="" className='mx-auto sm:mx-0'/>
                                <h4 className='font-chivo font-bold text-[22px] md:text-[19px] lg:text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Get Organized</h4>
                                <p className='font-sans text-lg md:text-[16px] lg:text-lg leading-8 md:leading-6 lg:leading-8 text-paracolor'>From lists to boards, organize work your way. </p>
                            </div>
                            <div className='mt-[96px]'>
                            <a className='font-sans text-lg font-medium py-5 px-12 md:px-[30px] leading-12 bg-primary rounded-[6px] text-white' href="">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
