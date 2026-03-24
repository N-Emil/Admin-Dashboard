import { useContext, useState } from 'react'
import FormStructure from '../components/FormStructure'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import useForm from '../hooks/useForm'
import Overlay from './Overlay'


const Register = () => {
    const navigate = useNavigate()
    const { addUser } = useContext(UserContext)
    const addDate = new Date().toLocaleString('az-AZ')

    const [success, setSuccess] = useState('')

    const [values, handleChange] = useForm({
        userName: '',
        email: '',
        password: ''
    })

    const fields = [
        { name: 'userName', placeholder: 'Full Name...', type: 'text', value: values.userName, onChange: handleChange },
        { name: 'email', placeholder: 'Email...', type: 'email', value: values.email, onChange: handleChange },
        { name: 'password', placeholder: 'Password...', type: 'password', value: values.password, onChange: handleChange }
    ]

    const handleRegister = (e) => {
        e.preventDefault()

        addUser({ ...values, addDate })
        setSuccess('Registration was successful!')

        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
    return (
        <>
            <Overlay />
            <FormStructure
                title='Register'
                path='/login'
                linkText='Already have an account? Login'
                fields={fields}
                success={success}
                onSubmit={handleRegister}
            />
        </>
    )
}

export default Register