import React from 'react'

const InputFields = ({ label, placeholder, type = 'text', htmlFor, name, id, tag = 'input', children, parentClassName,
    className, ...props }) => {
    const Component = tag;
    const inputStyle = `border-2 dark:border-gray-700 rounded-lg focus:border-blue-500 hover:border-blue-500 
    dark:bg-[#212121] dark:text-white transition-all outline-none ${className}`

    return (
        <>
            <div className={`flex flex-col gap-1 w-full ${parentClassName}`}>
                <label htmlFor={htmlFor} className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                    {label}
                </label>
                {tag === 'input' ? (
                    <input type={type} placeholder={placeholder} name={name} id={id} required {...props} className={inputStyle} />
                ) : (
                    <Component
                        type={tag === 'input' ? type : undefined}
                        name={name} id={id} {...props}
                        className={`${inputStyle} ${tag === 'textarea' ? 'min-h-15' : ''}`}>
                        {children}
                    </Component>
                )}
            </div>
        </>
    )
}

export default InputFields