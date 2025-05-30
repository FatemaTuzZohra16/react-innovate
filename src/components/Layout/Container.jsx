import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='max-w-[1400px] w-full mx-auto px-4'>{children}</div>
    )
}

export default Container

{/* <div className='w-auto md:w-[641px] lg:w-[1409px] mx-auto px-5 md:px-0'>{children}</div> */}