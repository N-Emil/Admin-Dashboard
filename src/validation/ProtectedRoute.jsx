import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth()
    const isAuth = sessionStorage.getItem("isLogged") === "true" && user != 'Guest'

    if (!isAuth) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute