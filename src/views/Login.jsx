import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '@context/AuthContext'

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')

        if (username == validUsername && password == validPassword) {
            login(username)
            navigate('/app/dashboard')
        } else {
            setError("Invalid username or password")
            return
        }
    }
    return (
        <>
            <div className='flex items-center justify-center h-screen bg-gray-100'>
                <form onSubmit={handleLogin} className='bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4'>
                    <h2 className='text-xl font-bold text-blue-600/75 text-center'>Login</h2>
                    {error && (
                        <div className='text-xs text-red-600 text-center bg-red-50 border border-red-200 rounded p-2' >
                            {error}
                        </div>
                    )}
                    <input type="text" placeholder='Username...' className='border p-2 rounded outline-none focus:border-blue-500'
                        value={username} onChange={(e) => { setUsername(e.target.value); if (error) setError('') }} />
                    <input type="password" placeholder='Password...' className='border p-2 rounded outline-none focus:border-blue-500'
                        value={password} onChange={(e) => { setPassword(e.target.value); if (error) setError('') }} />
                    <button type='submit' className='bg-[#1A2CA3] text-white py-2 rounded cursor-pointer hover:bg-[#0D1A63] 
                    transition-all'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login