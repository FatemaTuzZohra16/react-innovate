import React from 'react'
import Container from '../Layout/Container'
import appsImg from '../../assets/appsImg.png'
import appsIcon from '../../assets/appsIcon.png'

export const Apps = () => {
  return (
    <div className='bg-sectionColor relative'>
      <Container>
        <div>
          <div className='flex justify-between'>
            <div className='mt-[173px] mb-[23px]'>
              <h6 className='font-sans font-medium text-5 text-[#FF7364]'>Integrations</h6>
              <h3 className='w-[587px] font-chivo font-bold text-[46px] leading-[58px] text-headingColor mt-1'>Easily integrate with your favorite apps</h3>
              <p className='w-[533px] font-sans text-lg leading-8 text-paraColor mt-5 mb-10'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
              <a className='font-sans text-lg font-medium py-5 px-12 bg-primary rounded-[6px] text-white' href="">Get Started</a>
            </div>
            <div className='mt-[124px] mb-[120px]'>
              <img src={appsImg} alt="appsImg" />
            </div>
          </div>
        </div>
      </Container>
      <div className='absolute left-0 bottom-[91px] translate-x-[87%]'>
        <img src={appsIcon} alt="appsIcon" />
      </div>
    </div>
  )
}
