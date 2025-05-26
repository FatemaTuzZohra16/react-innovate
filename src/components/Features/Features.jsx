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
                <div className='md:mt-[160px] mt-[80px] md:mb-[55px] mb-0 md:flex justify-between'>
                    <div>
                        <img src={features} alt="features" />
                    </div>
                    <div>
                        <h3 className='w-auto md:w-[553px] font-chivo font-bold md:text-[46px] text-[30px] md:leading-[58px] leading-[40px] sm: text-center text-headingColor'>We provide features for your Business</h3>
                        <div className='md:flex justify-between mt-[64px] mb-10 text-center md:text-left'>
                            <div className='w-[220px] gap-[96px] mx-auto mb-5'>
                                <img src={features1} alt="" className='mx-auto'/>
                                <h4 className='font-chivo font-bold text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Fast and Easy to use</h4>
                                <p className='font-sans text-lg leading-8 text-paracolor'>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className='w-[220px] gap-[96px] mx-auto'>
                                <img src={features2} alt="" className='mx-auto'/>
                                <h4 className='font-chivo font-bold text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Safely Security</h4>
                                <p className='font-sans text-lg leading-8 text-paracolor'>All customer data is encrypted</p>
                            </div>
                        </div>
                        <div className='md:flex justify-between text-center md:text-left'>
                        <div className='w-[220px] gap-[96px] mx-auto'>
                                <img src={features3} alt="" className='mx-auto'/>
                                <h4 className='font-chivo font-bold text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Get Organized</h4>
                                <p className='font-sans text-lg leading-8 text-paracolor'>From lists to boards, organize work your way. </p>
                            </div>
                            <div className='mt-[96px]'>
                            <a className='font-sans text-lg font-medium py-5 px-12 bg-primary rounded-[6px] text-white' href="">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
