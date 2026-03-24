import { useEffect, useState } from "react"

const Overlay = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        localStorage.getItem('modal')
        setIsVisible(true)
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        localStorage.setItem('modal', 'true')
    }

    if (!isVisible) return null

    return (
        <div className='fixed inset-0 z-[9999] bg-blue-500 md:bg-blue-500 flex justify-center items-center p-4'>
            <div className='w-full max-w-[1000px] flex flex-col items-center gap-6 md:gap-10 text-white text-center'>
                <div className='flex flex-col gap-5 text-base md:text-lg lg:text-xl px-2'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Welcome to the Admin Dashboard!</h1>
                    <p className='leading-relaxed'>
                        Please note that this is a demonstration dashboard. You can use the Register page to add user data, which will then be displayed on the Users page.
                        However, to access the dashboard, you must log in with the Admin credentials:
                    </p>
                    <ul className='bg-black/20 p-4 rounded-lg inline-block mx-auto text-left space-y-2 border border-white/10'>
                        <li>Username: <strong className='text-yellow-300'> admin </strong> </li>
                        <li>Password: <strong className='text-yellow-300'> admin_123 </strong> </li>
                    </ul>
                </div>
                <button
                    className='bg-red-600 hover:bg-red-800 active:scale-95 transition-all cursor-pointer text-white rounded-lg p-2 h-12 w-16 md:h-14 md:w-20 flex items-center justify-center font-bold text-xl border border-white/20'
                    onClick={handleClose}
                >
                    X
                </button>
            </div>
        </div>
    )
}

export default Overlay