import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const DEFAULT_ADMIN = import.meta.env.VITE_ADMIN_USERNAME
    const [user, setUser] = useState(() => {
        const isLogged = sessionStorage.getItem('isLogged') === 'true'
        const savedName = sessionStorage.getItem('username')

        return isLogged ? (savedName || DEFAULT_ADMIN) : 'Guest'
    })

    const login = (userInput) => {
        const finalName = userInput || DEFAULT_ADMIN
        setUser(finalName)
        sessionStorage.setItem('username', finalName)
        sessionStorage.setItem('isLogged', 'true')
    }

    const logout = () => {
        setUser('Guest')
        sessionStorage.clear()
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider