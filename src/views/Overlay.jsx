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
        <>
            <div className='w-full h-screen bg-blue-500 opacity-75 flex justify-center items-center flex flex-col gap-10 text-white'>
                <div className='w-250 flex flex-col text-center gap-5 text-lg'>
                    <h1 className='text-2xl font-bold text-center'>Welcome to the Admin Dashboard!</h1>
                    <p>
                        Please note that this is a demonstration dashboard. You can use the Register page to add user data, which will then be displayed on the Users page.
                        However, to access the dashboard, you must log in with the Admin credentials:
                    </p>
                    <ul>
                        <li>Username: <strong> admin </strong> </li>
                        <li>Password: <strong> admin_123 </strong> </li>
                    </ul>
                </div>
                <button className='bg-red-800 hover:bg-red-400 cursor-pointer rounded p-2 h-10 w-15' onClick={handleClose}>
                    X
                </button>
            </div>
        </>
    )
}

export default Overlay