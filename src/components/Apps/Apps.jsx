import React from 'react'
import Container from '../Layout/Container'
import appsImg from '../../assets/appsImg.png'
import appsIcon from '../../assets/appsIcon.png'

export const Apps = () => {
  return (
    <div className='bg-sectionColor'>
      <Container>
        <div>
          <div className='md:flex justify-between gap-[30px]'>
            <div className='md:mt-[173px] mt-[80px] mb-[23px] relative text-center md:text-left md:w-[736px] lg:w-auto'>
              <h6 className='font-sans font-medium text-5 text-[#FF7364] text-center md:text-left'>Integrations</h6>
              <h3 className='w-auto lg:w-[587px] font-chivo font-bold lg:text-[46px] sm:text-[45px] text-[30px] lg:leading-[58px] sm:leading-[50px] leading-[40px] text-headingColor mt-1 text-center md:text-left'>Easily integrate with your favorite apps</h3>
              <p className='w-auto lg:w-[533px] font-sans sm:text-lg text-[16px] sm:leading-8 leading-6 text-center md:text-left text-paraColor mt-5 mb-10'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
              <a className='font-sans text-lg font-medium py-5 px-12 bg-primary rounded-[6px] text-white m-auto' href="">Get Started</a>

              <div className='absolute left-0 bottom-[91px] translate-x-[-100%]'>
                <img src={appsIcon} alt="appsIcon" />
              </div>
            </div>
            <div className='md:mt-[124px] mt-[50px] mb-[120px]'>
              <img src={appsImg} alt="appsImg" />
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}
