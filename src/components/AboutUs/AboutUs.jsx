import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import { AboutSlider } from './AboutSlider';

export const AboutUs = () => {
  return (
    <section className='md:py-[200px] py-[80px] bg-sectionColor'>
      <Container>
        <div className='md:flex justify-between'>
          <div className='w-auto md:w-[594px] text-center md:text-left mb-7 md:mb-0'>
            <h2 className='font-chivo font-bold md:text-[46px] text-[30px] md:leading-[58px] leading-[40px] text-paraColor'>What they are talking
              about us?</h2>
            <p className='font-sans md:text-lg text-[16px] leading-8 text-paraColor mt-[20px] mb-[40px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
            <a className='font-sans text-lg font-medium py-5 px-12 bg-primary rounded-[6px] text-white' href="">Get Started</a>
            <div className='flex w-[350px] items-center'>
              <div className='w-[163px] flex mt-[85px] relative mr-[5px]'>
                <div className='w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                <div className='w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white absolute left-[30px]'></div>
                <div className='w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white absolute left-[60px]'></div>
                <div className='w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white absolute left-[90px]'></div>
              </div>
              <div className='main  mt-[85px]'>
                <div className='flex items-center'>
                  <h2 className='font-chivo font-black text-[24px] leading-[36px] text-secondary mr-[10px]'>4.5</h2>
                  <span className='w-[16px] text-[#DADBE2]' >|</span>
                  <div className='flex text-yellow-500'>
                    <FaStar className='w-[19px] h-[19px]' />
                    <FaStar className='w-[19px] h-[19px]' />
                    <FaStar className='w-[19px] h-[19px]' />
                    <FaStar className='w-[19px] h-[19px]' />
                    <FaStar className='w-[19px] h-[19px]' />
                  </div>
                </div>
                <p className='font-sans font-medium text-lg leading-8 text-paraColor'>280k Total Review</p>
              </div>
            </div>
          </div>
          <div>
            <AboutSlider></AboutSlider>
          </div>
        </div>
      </Container>
    </section>
  )
}
