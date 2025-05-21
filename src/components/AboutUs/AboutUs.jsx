import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import { AboutSlider } from './AboutSlider';

export const AboutUs = () => {
  return (
    <section className='py-[200px] bg-sectionColor'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-[594px]'>
            <h2 className='font-chivo font-bold text-[46px] leading-[58px] text-paraColor'>What they are talking
              about us?</h2>
            <p className='font-sans text-lg leading-8 text-paraColor mt-[20px] mb-[40px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
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
          {/* <div className='w-[687px] pt-[64px] px-[60px] pb-[50px] mt-[107px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  rounded-[20px] relative'>
            <div className='w-[124px] h-[124px] rounded-full bg-[#C4C4C4] absolute left-[48px] top-[-80px] border-[10px] border-[#F7F7FC]'></div>
            <p className='w-[567px] font-sans text-[22px] leading-[44px] text-[#6C6E81]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
            <h3 className='font-chivo font-bold text-6 leading-[36px] text-[#30344E]mt-[37px] mb-[5px]'>Robert Fox</h3>
            <div className='flex justify-between items-center'>
              <p className='font-sans text-[14px] leading-[26px] text-[#30344E]'>Digital Marketer</p>
              <div className='flex text-yellow-500'>
                <FaStar className='w-[27px] h-[27px]'/>
                <FaStar className='w-[27px] h-[27px]'/>
                <FaStar className='w-[27px] h-[27px]'/>
                <FaStar className='w-[27px] h-[27px]'/>
                <FaStar className='w-[27px] h-[27px]'/>
              </div>
            </div>
          </div> */}
          <div>
            <AboutSlider></AboutSlider>
          </div>
        </div>
      </Container>
    </section>
  )
}
