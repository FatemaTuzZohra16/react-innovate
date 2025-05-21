import React from 'react'
import Container from '../Layout/Container'
import platformIcon1 from '../../assets/platformIcon1.png'
import platformIcon2 from '../../assets/platformIcon2.png'
import platformIcon3 from '../../assets/platformIcon3.png'

export const Platform = () => {
    const platformData = [
        {
            img: platformIcon1,
            title: `Login or sign up to be able use our platform`,
            description: `This quickstart shows you how to use Identity Platform to sign in a user with an email and password. `
        },
        {
            img: platformIcon2,
            title: `Connect your website with just a few click`,
            description: `Once your website is online, you can configure it, I will show you how to put your website online `
        },
        {
            img: platformIcon3,
            title: `Take some sales data that you want`,
            description: `Sell your data directly: The most straightforward method is to sell your data directly to another `
        },
    ]
    return (
        <Container>
            <div className='px-[60px]'>
                <div className='pt-[336px] pb-[160px] flex justify-between'>
                    <h3 className='w-[504px] text-headingColor font-chivo font-bold text-[46px] leading-[58px]'>How simple is it to use our platform?</h3>
                    <p className='w-[530px] font-sans test-lg leading-8 text-paraColor'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </div>
                <div className='flex justify-between'>
                    {
                        platformData.map((item) => (
                            <div  className='w-[300px] text-center'>
                                <img className='m-auto' src={item.img} alt="" />

                                <h4 className='text-headingColor font-chivo font-bold text-[24px] leading-9 mt-[26px] mb-3'>{item.title}</h4>

                                <p className='font-sans text-lg leading-8 text-paraColor'>{item.description}</p>
                            </div>
                        ))
                    }

                    {/* <div className='w-[300px] text-center'>
                        <img className='m-auto' src={platformIcon1} alt="" />
                        <h4 className='text-headingColor font-chivo font-bold text-[24px] leading-9 mt-[26px] mb-3'>Login or sign up to be able use our platform</h4>
                        <p className='font-sans text-lg leading-8 text-paraColor'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div className='w-[300px] text-center'>
                        <img className='m-auto' src={platformIcon2} alt="" />
                        <h4 className='text-headingColor font-chivo font-bold text-[24px] leading-9 mt-[26px] mb-3'>Connect your website with just a few click</h4>
                        <p className='font-sans text-lg leading-8 text-paraColor'>Once your website is online, you can configure it, I will show you how to put your website online</p>
                    </div>
                    <div className='w-[300px] text-center'>
                        <img className='m-auto' src={platformIcon3} alt="" />
                        <h4 className='text-headingColor font-chivo font-bold text-[24px] leading-9 mt-[26px] mb-3'>Take some sales data that you want</h4>
                        <p className='font-sans text-lg leading-8 text-paraColor'>Sell your data directly: The most straightforward method is to sell your data directly to another</p>
                    </div> */}
                </div>
            </div>
        </Container>
    )
}
