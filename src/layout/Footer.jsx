import React, { useContext } from 'react'
import logo from '@assets/logo.webp'
import { AuthContext } from '@context/AuthContext'

const Footer = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <footer className='bg-[#003049] text-white h-auto min-h-40 grid grid-cols-1 sm:grid-cols-3 items-center px-5 sm:px-10 py-5 dark:bg-[#1A1A1A]'>
                <div className='flex justify-center sm:justify-start mb-5 sm:mb-0'>
                    <img src={logo} className='h-20 w-20 sm:h-35 sm:w-35 object-contain' alt="logo" />
                </div>
                <div className='flex flex-col items-center gap-5 mb-5 sm:mb-0'>
                    <p>This website was created by {user}. </p>
                    <p>© 2026 All rights reserved.</p>
                </div>
                <div className='flex flex-col items-center gap-1.5'>
                    <a href='#' className='hover:underline'>About us</a>
                    <a href='#' className='hover:underline'>Contact us</a>
                    <a href='#' className='hover:underline'>Privacy Policy</a>
                </div>
            </footer>
        </>
    )
}

export default Footer