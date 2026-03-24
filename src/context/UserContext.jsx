import { createContext, useEffect } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [users, setUsers] = useLocaleStorage('registeredUsers', [])

    useEffect(() => {
        if (users.length > 0) {
            localStorage.setItem('registeredUsers', JSON.stringify(users))
        } else {
            localStorage.removeItem('registeredUsers')
        }
    }, [users])

    const addUser = (newUser) => {
        const lastId = users.length > 0 ? users[users.length - 1].id : 0
        const newId = lastId + 1

        setUsers(
            [
                ...users,
                { ...newUser, id: newId }
            ])
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <UserContext.Provider value={{ users, addUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider