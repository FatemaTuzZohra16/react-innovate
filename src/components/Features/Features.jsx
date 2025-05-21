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
                <div className='mt-[160px] mb-[55px] flex justify-between'>
                    <div>
                        <img src={features} alt="features" />
                    </div>
                    <div>
                        <h3 className='w-[553px] font-chivo font-bold text-[46px] leading-[58px] text-headingColor'>We provide features for your Business</h3>
                        <div className='flex justify-between mt-[64px] mb-10'>
                            <div className='w-[220px] gap-[96px]'>
                                <img src={features1} alt="" />
                                <h4 className='font-chivo font-bold text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Fast and Easy to use</h4>
                                <p className='font-sans text-lg leading-8 text-paracolor'>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className='w-[220px] gap-[96px]'>
                                <img src={features2} alt="" />
                                <h4 className='font-chivo font-bold text-[22px] leading-[34px] text-headingColor mt-[14px] mb-[6px]'>Safely Security</h4>
                                <p className='font-sans text-lg leading-8 text-paracolor'>All customer data is encrypted</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                        <div className='w-[220px] gap-[96px]'>
                                <img src={features3} alt="" />
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
