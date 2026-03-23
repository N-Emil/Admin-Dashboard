import React from 'react'
import { FaChartLine, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'

const Dashboard = () => {
  const stats = [
    { id: 1, title: "Total Users", value: "1,250", icon: <FaUsers />, color: "bg-blue-600" },
    { id: 2, title: "New Orders", value: "45", icon: <FaShoppingCart />, color: "bg-emerald-500" },
    { id: 3, title: "Total Revenue", value: "$12,400", icon: <FaWallet />, color: "bg-amber-500" },
    { id: 4, title: "Growth Rate", value: "+12.5%", icon: <FaChartLine />, color: "bg-indigo-500" },
    { id: 5, title: "GitHub Projects", value: "320", icon: <FaGithub />, color: "bg-gray-800" },
    { id: 6, title: "LinkedIn Followers", value: "1.2k", icon: <FaLinkedin />, color: "bg-[#0077B5]" },
    { id: 7, title: "Instagram Reach", value: "5,400", icon: <FaInstagram />, color: "bg-[#8F0177]" },
    { id: 8, title: "Facebook Ads", value: "14", icon: <FaFacebook />, color: "bg-[#1877F2]" },
  ]
  return (
    <>
      <div className='w-full' >
        <PageHeader title="Dashboard" />
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {stats.map(item => (
            <div key={item.id} className='border p-6 rounded-2xl flex items-center gap-4 cursor-pointer transition-all 
            duration-300 ease-in-out hover:scale-110'>
              <div className={`${item.color} text-white p-4 rounded-xl text-2xl`}> {item.icon} </div>
              <div>
                <p className='text-sm font-medium text-gray-500'> {item.title} </p>
                <h3 className='text-xl font-bold text-gray-800 dark:text-white'> {item.value} </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard