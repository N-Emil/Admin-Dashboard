import { useState } from 'react'
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(open => !open)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      <div className='min-h-screen bg-gray-50 dark:bg-[#121212] dark:text-white'>
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        <div className='flex flex-col min-h-screen md:ml-50'> {/* only reserve margin on md+ */}
          <Navbar onMenuClick={toggleSidebar} />

          <main className='flex-1 p-8 flex justify-center items-start'>
            <div className='w-full max-w-7xl'>
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App