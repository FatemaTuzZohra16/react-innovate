import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import Container from '../Layout/Container'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [show, setshow] = useState(false)
    const [navScroll, setnavScroll] = useState(false)
    const handleClick = ()=>{
        setshow(true);
        
    }
    useEffect(()=>{
        function scrollFunction() {
            if(window.scrollY > 200){
                setnavScroll(true)
                
            }else{
                setnavScroll(false)
            }
        }
        window.addEventListener("scroll", scrollFunction)
    }, [])
    return (
        <div className='pt-[32px]'>
                <div className={`md:flex ${navScroll ? "fixed bg-blue-950/10 z-30 transition duration-300 shadow-lg" : "absolute"} top-0 left-0 w-full justify-between items-center`}>
            <Container>
                    <div className='md:flex items-center justify-between'>
                    <div className='flex items-center justify-between'>
                        <img src={logo} alt="logo" />
                        <div onClick={handleClick} className='block md:hidden text-2xl text-white'>
                            <FaBars />
                        </div>
                    </div>
                    <div>
                        <ul className='hidden md:flex gap-[50px] text-white font-sans text-lg font-medium'>
                            <li><a className=' hover:text-black' href="">Home</a></li>
                            <li><a className=' hover:text-black' href="">Features</a></li>
                            <li><a className=' hover:text-black' href="">Service</a></li>
                            <li><a className=' hover:text-black' href="">Pages</a></li>
                            <li><a className=' hover:text-black' href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center gap-x-9'>
                        <a className='text-white font-sans text-lg font-medium' href="">Login</a>
                        <a className='text-black font-sans text-lg font-medium py-5 px-12 bg-secondary rounded-[6px]' href="">Register</a>
                    </div>
                    </div>
            </Container>
                </div>
            {
        show &&
            <div className='lg:flex justify-between items-center bg-[#1166F4] text-center shadow-[4px_4px_4px_4px_rgba(255,255,255,0.5)] relative'>
                <div onClick={()=>setshow(false)} className='text-2xl text-white'>
                <ImCross className='flex items-center justify-center absolute top-[50%] left-10' />
                </div>
                <div>
                    <ul className='lg:flex gap-[50px] text-white font-sans text-lg font-medium'>
                        <li className='mb-5 hover:text-black'><a href="">Home</a></li>
                        <li className='mb-5 hover:text-black'><a href="">Features</a></li>
                        <li className='mb-5 hover:text-black'><a href="">Service</a></li>
                        <li className='mb-5 hover:text-black'><a href="">Pages</a></li>
                        <li className='mb-5 hover:text-black'><a href="">Blog</a></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center gap-x-9'>
                    <a className='text-white font-sans text-lg font-medium mb-5' href="">Login</a>
                    <a className='text-black font-sans text-lg font-medium py-2 px-9 bg-secondary rounded-[6px] mb-5' href="">Register</a>
                </div>
            </div>
    }
        </div>
    )
}

export default Navbar
