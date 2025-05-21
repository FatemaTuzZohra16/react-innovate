import { FaStar } from 'react-icons/fa'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const AboutSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-[687px]">
      <Slider {...settings}>
      <div className='w-[687px] pt-[64px] px-[60px] pb-[50px] mt-[107px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  rounded-[20px] relative'>
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
          </div>

          <div className='w-[687px] pt-[64px] px-[60px] pb-[50px] mt-[107px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  rounded-[20px] relative'>
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
          </div>

          <div className='w-[687px] pt-[64px] px-[60px] pb-[50px] mt-[107px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  rounded-[20px] relative'>
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
          </div>

      </Slider>
    </div>
  );
};

    