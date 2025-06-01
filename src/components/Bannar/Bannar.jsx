import React from 'react'
import Container from '../Layout/Container'
import bannar1 from '../../assets/bannar1.png'

const Bannar = () => {

  return (
    <div className='md:py-[98px] py-[60px] text-white'>
    <Container>
    <div className='text-center relative'>
        <h1 className='font-chivo font-bold text-[30px] sm:text-[40px] md:text-[56px] leading-[40px] sm:leading-[50px] md:leading-[64px] w-auto md:w-[796px] m-auto'>Get your work done with Management Tool</h1>
        <p className='w-auto md:w-[467px] font-sans font-regular text-[16px] md:text-lg md:leading-8 leading-[26px] m-auto mt-5'>The world's first project management platform that connects everything</p>
        <div className='w-full relative items-center mt-8 md:mb-[98px] mb-[30px] flex flex-col md:block'>
            <input type="text"className='w-full sm:w-[480px] rounded-[6px] bg-white py-5 pl-6 text-[#B4B6C4] outline-0' placeholder='Your business email' />
            <div>
            <a className='absolute top-[10px] md:top-[3px] right-[10px] sm:right-[135px] md:right-[264px] lg:right-[391px] xl:right-[472px] text-black font-sans text-lg font-medium py-2 md:py-[15px] px-7 bg-secondary rounded-[6px]' href="">Try for free</a>
            </div>
        </div>
        <div className='absolute w-full max-w-[1200px] top-[305px] md:top-[390px] lg:top-[500px] left-1/2 -translate-x-1/2'>
            <img className='h-auto mx-auto' src={bannar1} alt="bannar1" />
        </div>
    </div>
    </Container>
    </div>
  )
}

export default Bannar