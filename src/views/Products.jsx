import React, { useState } from 'react'
import PageHeader from '@views/PageHeader'
import InputFields from './InputFields'

const Products = () => {
  const btnStyle = 'border-none rounded-lg p-2 cursor-pointer text-white w-20'

  const textFields = [
    {
      label: 'Name', name: 'name', type: 'text',
      validate: (val) => val.trim().length > 0 && val.trim().length < 3 ? 'Name must be at least 3 characters long' : ''
    },
    {
      label: 'Count', name: 'count', type: 'number',
      validate: (val) => val && (Number(val) <= 0 || Number(val) % 1 !== 0) ? 'Count must be positive and integer number' : ''
    },
    {
      label: 'Price', name: 'price', type: 'number',
      validate: (val) => val && (Number(val) <= 0) ? 'Price must be positive number' : ''
    },
    { label: 'Date', name: 'date', type: 'date', validate: () => '' },
    { label: 'Category', name: 'category', tag: 'select', options: ['Electronics', 'Food', 'Clothes'], validate: () => '' },
    {
      label: 'Description', name: 'description', tag: 'textarea',
      validate: (val) => val.trim().length > 200 ? 'Description must be between 0 and 200 characters' : ''
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    count: '',
    price: '',
    date: '',
    category: 'Electronics',
    description: ''
  })

  const [errors, setErrors] = useState({})

  const isFormValid =
    formData.date !== '' &&
    formData.name.trim().length >= 3 &&
    Number(formData.count) > 0 &&
    Number(formData.count) % 1 === 0 &&
    Number(formData.price) > 0 &&
    formData.description.trim().length <= 200 &&
    formData.description.trim().length > 0

  const handleInput = (e) => {
    e.preventDefault()
    console.log('For data: ', formData);
  }

  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))

    const field = textFields.find(f => f.name === name)
    if (field) {
      setErrors(prev => ({
        ...prev, [name]: field.validate(value)
      }))
    }
  }

  const resetForm = (e) => {
    e.preventDefault()
    setFormData({ name: '', count: '', price: '', date: '', category: 'Electronics', description: '' })
    setErrors({})
  }

  return (
    <>
      <div className='w-full'>
        <PageHeader title="Products" />
        <form className='border rounded-lg p-4 md:p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {textFields.map(field => (
              <div key={field.name}>
                <InputFields label={field.label} name={field.name} type={field.type}
                  value={formData[field.name]} tag={field.tag || 'input'} onChange={handleChangeForm}
                  className={errors[field.name] ? 'border-red-500' : ''} >
                  {field.tag === 'select' && field.options.map(opt => (
                    <option key={opt} value={opt}> {opt} </option>
                  ))}
                  {errors[field.name] && (
                    <p className='text-red-500'> {errors[field.name]} </p>
                  )}
                </InputFields>
                {errors[field.name] && (
                  <p className='text-red-500'> {errors[field.name]} </p>
                )}
              </div>
            ))}
          </div>

          <div className='flex justify-center items-center gap-5 mt-15'>
            <button className={`${btnStyle} ${isFormValid ? 'bg-green-500 hover:bg-[#A0D585]' : 'cursor-not-allowed bg-gray-400'}  `}
              type='submit' onClick={handleInput} disabled={!isFormValid}>Submit</button>
            <button className={`${btnStyle} bg-amber-600 hover:bg-amber-700 `} onClick={resetForm} >Reset</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Products