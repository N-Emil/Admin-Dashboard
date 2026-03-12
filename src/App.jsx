import React, { useContext } from 'react'
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '@context/ThemeContext'

const App = () => {
  const { mode } = useContext(ThemeContext)

  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const toggleSidebar = () => setSidebarOpen(open => !open)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      <div className='min-h-screen bg-gray-50 dark:bg-[#212121] dark:text-white'>
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        <div className='flex flex-col min-h-screen md:ml-50'> {/* only reserve margin on md+ */}
          <Navbar onMenuClick={toggleSidebar} />

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