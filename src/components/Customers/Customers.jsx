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

        <div className='mb-[140px]'>
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
                    <div className='flex justify-between'>
                        <div></div>
                        <div className='my-[85px] mr-[70px]'>
                            <h3 className='w-[554px] font-chivo font-bold text-[44px] text-white'>Trusted by 35,000+ happy customers.</h3>
                            <div className='flex justify-between'>
                                {
                                    customerData.map((item) => (
                                        <div className='w-[176px] gap-10'>
                                            <h4 className='font-chivo font-black text-[44px] leading-[54px] text-white mt-[64px] mb-3'>{item.title}</h4>
                                            <p className='font-sans font-medium text-lg leading-8 text-white'>{item.description}</p>
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
