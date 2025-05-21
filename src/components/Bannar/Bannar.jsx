import React from 'react'
import Container from '../Layout/Container'
import bannar1 from '../../assets/bannar1.png'

const Bannar = () => {

  return (
    <div className='py-[98px] text-white'>
    <Container>
    <div className='text-center relative'>
        <h1 className='font-chivo font-bold text-[56px] leading-[64px] w-[796px] m-auto'>Get your work done with Management Tool</h1>
        <p className='w-[467px] font-sans font-regular text-lg leading-8 m-auto mt-5'>The world's first project management platform that connects everything</p>
        <div className='relative items-center mt-8 mb-[98px]'>
            <input type="text"className='w-[480px] rounded-[6px] bg-white py-5 pl-6 text-[#B4B6C4] outline-0' placeholder='Your business email' />
            <a className='absolute top-[4px] right-[472px] text-black font-sans text-lg font-medium py-[15px] px-7 bg-secondary rounded-[6px]' href="">Try for free</a>
        </div>
        <div className='absolute top-[427px]'>
            <img src={bannar1} alt="bannar1" />
        </div>
    </div>
    </Container>
    </div>
  )
}

export default Bannar