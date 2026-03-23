import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import FormStructure from '../components/FormStructure'

const Login = () => {
    const fields = [
        { placeholder: 'Username...', type: 'text', onChange: (e) => setUsername(e.target.value) },
        { placeholder: 'Password...', type: 'password', onChange: (e) => setPassword(e.target.value) }
    ]

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')

        if (username == validUsername && password == validPassword) {
            login(username)
            setSuccess('Login successful!')

            setTimeout(() => {
                navigate('/app/dashboard')
            }, 1000);
        } else {
            setError("Invalid username or password")
            return
        }
    }
    return (
        <>
            <FormStructure
                title='Login'
                path='/register'
                linkText='Don’t have an account? Sign up'
                fields={fields}
                error={error}
                success={success}
                onSubmit={handleLogin}
            >
            </FormStructure>
        </>
    )
}

export default Login