import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '@context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const isAuth = sessionStorage.getItem("isLogged") === "true" && user != 'Guest'

    if (!isAuth) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute