import React, { useContext, useState } from 'react'
import FormStructure from '../components/FormStructure'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const Register = () => {
    const navigate = useNavigate()
    const { addUser } = useContext(UserContext)
    const addDate = new Date().toLocaleString('az-AZ')

    const [success, setSuccess] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fields = [
        { placeholder: 'Full Name...', type: 'text', value: userName, onChange: (e) => setUserName(e.target.value) },
        { placeholder: 'Email...', type: 'email', value: email, onChange: (e) => setEmail(e.target.value) },
        { placeholder: 'Password...', type: 'password', value: password, onChange: (e) => setPassword(e.target.value) }
    ]

    const handleRegister = (e) => {
        e.preventDefault()

        addUser({ userName, email, password, addDate })
        setSuccess('Registration was successful!')

        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
    return (
        <>
            <FormStructure
                title='Register'
                path='/login'
                linkText='Already have an account? Login'
                fields={fields}
                success={success}
                onSubmit={handleRegister}
            >
            </FormStructure>
        </>
    )
}

export default Register