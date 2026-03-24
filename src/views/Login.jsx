import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormStructure from '../components/FormStructure'
import useForm from '../hooks/useForm'
import useAuth from '../hooks/useAuth'
import Overlay from './Overlay'

const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    const [values, handleChange] = useForm({
        userName: '',
        password: ''
    })

    const fields = [
        { name: 'userName', placeholder: 'Username...', type: 'text', value: values.userName, onChange: handleChange },
        { name: 'password', placeholder: 'Password...', type: 'password', value: values.password, onChange: handleChange }
    ]

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')

        if (values.userName == validUsername && values.password == validPassword) {
            login(values.userName)
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
            <Overlay />
            <FormStructure
                title='Login'
                path='/register'
                linkText='Don’t have an account? Sign up'
                fields={fields}
                error={error}
                success={success}
                onSubmit={handleLogin}
            />
        </>
    )
}

export default Login