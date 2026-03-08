import React from 'react'
import admin_icon from '../assets/admin_icon.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const navLinks = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Products", path: "/products" },
        { name: "Tables", path: "/tables" }
    ]
    return (
        <>
            {/* Full Sidebar */}
            <div className='fixed top-0 left-0 h-screen w-50 bg-[#1A2CA3]'>
                {/* User side */}
                <div className='h-25 w-50 bg-[#0D1A63] flex items-center justify-center'>
                    <div className='flex items-center gap-4 text-white'>
                        <img src={admin_icon} className='h-12 w-12 rounded-full' alt="user icon" />
                        <p className='font-medium text-base cursor-pointer'> Admin User </p>
                    </div>
                    {/* Buttons side */}
                </div>
                <div className='flex flex-col justify-center items-center gap-7 mt-10'>
                    {navLinks.map((item, index) => (
                        <NavLink key={index} to={item.path} className={({ isActive }) => `
                        bg-[#81A6C6] w-37 h-12 rounded-full flex justify-center items-center
                        ${isActive
                                ? 'bg-white text-[#1A2CA3] shadow-lg scale-105'
                                : 'bg-[#81A6C6]/20 text-white hover:bg-[#81A6C6]/40 hover:scale-105 active:scale-95'}
                        `}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sidebar