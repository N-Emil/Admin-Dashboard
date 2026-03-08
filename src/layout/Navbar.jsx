import React from 'react'
import logo from '../assets/logo.webp'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
    const navIcons = [
        { id: 1, icon: <FaHome />, label: "Home", path: "dashboard" },
        { id: 2, icon: <MdMessage />, label: "Messages", path: "" },
        { id: 3, icon: <IoIosNotifications />, label: "Notifications", path: "" }
    ]
    return (
        <>
            <nav className='w-full h-18 bg-[#1A2CA3] sticky top-0 flex items-center px-6'>
                <div className='flex justify-between items-center w-full'>
                    <NavLink to="dashboard">
                        <img src={logo} className='w-25 h-25 cursor-pointer' alt="logo" />
                    </NavLink>
                    <input type="text" placeholder='Search...' className='w-120 h-9 px-3 rounded-lg bg-white/90 focus:bg-white transition-all' />
                    <div className='flex justify-center items-center gap-4'>
                        {navIcons.map(item => (
                            <NavLink to={item.path} key={item.id} title={item.label} className='text-2xl text-white/70 transition-all duration-300 
                                hover:text-white hover:scale-110 focus:text-blue-300 focus:outline-none cursor-pointer'>
                                {item.icon}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar