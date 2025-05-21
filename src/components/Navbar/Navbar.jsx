import React from 'react'
import logo from '../../assets/logo.png'
import Container from '../Layout/Container'

const Navbar = () => {
    return (
        <div className='pt-[32px]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <ul className='flex gap-[50px] text-white font-sans text-lg font-medium hover:text-black'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-9'>
                        <a className='text-white font-sans text-lg font-medium' href="">Login</a>
                        <a className='text-black font-sans text-lg font-medium py-5 px-12 bg-secondary rounded-[6px]' href="">Register</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
