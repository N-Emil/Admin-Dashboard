import React, { useContext } from 'react'
import PageHeader from '../components/PageHeader'
import { UserContext } from '../context/UserContext'
import { MdDelete } from 'react-icons/md'

const Users = () => {
    const headers = ['Full Name', 'Email', 'Password', 'Registration Date', 'Action']
    const { users, deleteUser } = useContext(UserContext)

    const headerStyle = 'px-4 py-3 md:px-10 md:py-5 text-left font-medium bg-[#1C4D8D] text-white dark:bg-gray-700 whitespace-nowrap'
    const dataStyle = 'border-b px-4 py-3 md:px-10 md:py-5 bg-[#4988C4] text-white dark:bg-gray-500 whitespace-nowrap'

    return (
        <>
            <PageHeader title='Users' />
            <div className='p-4 md:p-8'>
                <div className='overflow-x-auto rounded-lg shadow-lg'>
                    <table className='min-w-full border-collapse'>
                        <thead>
                            <tr>
                                {headers.map(header => (
                                    <th key={header} className={headerStyle}> {header} </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className={dataStyle}> {user.userName} </td>
                                    <td className={dataStyle}> {user.email} </td>
                                    <td className={dataStyle}> {user.password} </td>
                                    <td className={dataStyle}> {user.addDate} </td>
                                    <td className={dataStyle}>
                                        <button onClick={() => deleteUser(user.id)} className='bg-red-500 p-2 rounded-lg 
                                    cursor-pointer hover:scale-120 transition duration-300'>
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users