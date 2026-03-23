import React, { useState } from 'react'

const FormStructure = ({ title, path, linkText, fields, onSubmit, error, success }) => {
    return (
        <>
            <div className='flex items-center justify-center h-screen bg-gray-100'>
                <form onSubmit={onSubmit} className='bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4'>
                    <h2 className='text-xl font-bold text-blue-600/75 text-center'> {title} </h2>
                    {error && (
                        <div className='text-xs text-red-600 text-center bg-red-50 border border-red-200 rounded p-2' >
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className='text-xs text-green-600 text-center bg-green-50 border border-green-200 rounded p-2'>
                            {success}
                        </div>
                    )}
                    {fields && fields.map((field, index) => (
                        <input
                            key={index}
                            type={field.type}
                            placeholder={field.placeholder}
                            className='border p-2 rounded outline-none focus:border-blue-500'
                            value={field.value}
                            onChange={field.onChange}
                            required
                        />
                    ))}
                    <button type='submit' className='bg-[#1A2CA3] text-white py-2 rounded cursor-pointer hover:bg-[#0D1A63] 
                    transition-all'>Submit</button>
                    <a href={path} className='underline'> {linkText} </a>
                </form>
            </div>
        </>
    )
}

export default FormStructure