import React, { useContext, useState } from 'react'
import admin_icon from '../assets/admin_icon.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaSignOutAlt, FaTools, FaUser } from 'react-icons/fa'
import { IoMdArrowDropleft } from 'react-icons/io'
import { AuthContext } from '@context/AuthContext'

const Sidebar = ({ isOpen = true, onClose }) => {
    const { user, logout } = useContext(AuthContext)
    const navLinks = [
        { name: "Dashboard", path: "dashboard" },
        { name: "Products", path: "products" },
        { name: "Tables", path: "tables" }
    ]

    const profileItems = [
        { name: "Profile", icon: <FaUser />, path: "profile" },
        { name: "Settings", icon: <FaTools />, path: "settings" },
        { name: "Logout", icon: <FaSignOutAlt />, path: "/", isLogout: true }
    ]

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    const [showPanel, setShowPanel] = useState(false)
    return (
        <>
            {/* Full Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-50 bg-[#1A2CA3] z-50 transform transition-transform duration-300 dark:bg-[#1E1E1E]
                           ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                           md:translate-x-0`}> {/* always visible on md+ */}
                {/* User side */}
                <div className='h-25 w-50 bg-[#0D1A63] flex items-center justify-center dark:bg-[#212121]'>
                    <div className='flex items-center gap-3 text-white'>
                        <img src={admin_icon} className='h-12 w-12 rounded-full' alt="user icon" />
                        <p className='font-medium text-base cursor-pointer' onClick={() => setShowPanel(!showPanel)}> {user} </p>
                        <span className={`transition-transform duration-300 ${showPanel ? '-rotate-90' : 'rotate-0'}`}>
                            <IoMdArrowDropleft className='text-lg' />
                        </span>
                    </div>

                    {/* Profile dropdown */}
                    {showPanel && (
                        <div className='absolute top-20 w-48 p-3 bg-white shadow-lg rounded-lg z-50 dark:bg-black'>
                            <div className='flex flex-col'>
                                {profileItems.map((item, index) => (
                                    <Link to={item.path} key={index} onClick={item.isLogout ? handleLogout : () => showPanel(false)}
                                        className={`flex items-center gap-3 px-4 py-3 text-sm
                                    ${item.isLogout
                                                ? 'text-red-600 hover:bg-red-50 border-t border-gray-300'
                                                : 'text-gray-700 hover:bg-blue-50 border-b border-gray-300'}`}>
                                        <span> {item.icon} </span>
                                        <span> {item.name} </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Navlink side */}
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
            {/* overlay for small screens */}
            {isOpen && (
                /* overlay only behind the sidebar; sidebar is z-50 so clicks inside still work */
                <div className='fixed inset-0 bg-black/50 z-40 md:hidden' onClick={onClose} />
            )}
        </>
    )
}

export default Sidebar