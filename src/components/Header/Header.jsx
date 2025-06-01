import React from 'react'
import hero from '../../assets/hero.png'
const Header = ({children}) => {
  return (
    <div className="bg-cover bg-no-repeat bg-center pb-[110px] sm:pb-[305px] lg:pb-[500px]"
    style={  {
        backgroundImage: `url(${hero})`,
    }} 
    >
        {children}
        </div>
  )
}

export default Header