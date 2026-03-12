import React, { useContext } from 'react'
import logo from '../assets/logo.webp'
import { NavLink } from 'react-router-dom'
import { FaBars, FaHome, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { ThemeContext } from '@context/ThemeContext';

const Navbar = ({ onMenuClick }) => {
    const { mode, switchMode } = useContext(ThemeContext)

    const navIcons = [
        { id: 1, icon: <FaHome />, label: "Home" },
        { id: 2, icon: <MdMessage />, label: "Messages" },
        { id: 3, icon: <IoIosNotifications />, label: "Notifications" },
        {
            id: 4, // Change mode icon
            icon: mode === 'light' ? <FaToggleOff /> : <FaToggleOn />,
            label: mode === 'light' ? 'Light mode' : 'Dark mode',
        }
    ]

    return (
        <>
            <nav className='w-full h-18 bg-[#1A2CA3] sticky top-0 flex items-center px-6 dark:bg-black' >
                <div className='flex justify-between items-center w-full'>
                    {/* hamburger button visible only on small screens */}
                    <button onClick={onMenuClick} className='text-white text-2xl mr-4 md:hidden'>
                        <FaBars />
                    </button>

                    <div to="dashboard">
                        <img src={logo} className='w-25 h-25 cursor-pointer' alt="logo" />
                    </div>
                    <input type="text" placeholder='Search...' className='w-full md:w-120 h-9 px-3 rounded-lg bg-white/90 
                    focus:bg-white transition-all' />
                    <div className='flex justify-center items-center gap-4'>
                        {navIcons.map(item => (
                            <button to={item.path} key={item.id} title={item.label}
                                onClick={item.id === 4 ? switchMode : undefined}
                                className='text-2xl text-white/70 transition-all duration-300 
                                hover:text-white hover:scale-110 focus:text-blue-300 focus:outline-none cursor-pointer'>
                                {item.icon}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar