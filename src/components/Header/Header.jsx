import React from 'react'
import hero from '../../assets/hero.png'
const Header = ({children}) => {
  return (
    <div className="bg-cover bg-no-repeat bg-center"
    style={  {
        backgroundImage: `url(${hero})`,
    }} 
    >
        {children}
        </div>
  )
}

export default Header