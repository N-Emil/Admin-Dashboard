import React from 'react'
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-50'>
        <Sidebar />

        <div className='ml-50 flex flex-col min-h-screen'>
          <Navbar />

          <main className='flex-1 p-8 flex justify-center items-start'>
            <div className='w-full max-w-7xl'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App