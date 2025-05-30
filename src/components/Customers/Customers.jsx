import React from 'react'
import Container from '../Layout/Container'
import Customersbg from '../../assets/Customersbg.png'

export const Customers = ({ children }) => {
    const customerData = [
        {
            title: `720+`,
            description: `Over 500 business powered with us`
        },
        {
            title: `4.9`,
            description: `Rating on google play and app store`
        },
        {
            title: `200+`,
            description: `Easily integrate with your favorite apps`
        },
    ]
    return (

        <div className='md:mb-[140px] mb-[60px]'>
            <Container>
                <div
                    style={{
                        backgroundImage: `url(${Customersbg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '50px'
                    }}
                >
                    {children}
                    <div className='md:flex justify-between'>
                        <div></div>
                        <div className='my-[85px] md:mr-[70px] mr-0 text-center md:text-left'>
                            <h3 className='w-auto md:w-[554px] font-chivo font-bold sm:text-[44px] text-[30px] text-white pt-10 md:pt-0'>Trusted by 35,000+ happy customers.</h3>
                            <div className='flex justify-between pb-8 md:pb-0'>
                                {
                                    customerData.map((item) => (
                                        <div className='w-auto md:w-[176px] md:gap-10 gap-4'>
                                            <h4 className='font-chivo font-black sm:text-[44px] text-[30px] leading-[54px] text-white mt-[64px] mb-3'>{item.title}</h4>
                                            <p className='font-sans font-medium sm:text-lg text-[16px] sm:leading-8 leading-[22px] text-white'>{item.description}</p>
                                        </div>
                                 ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
