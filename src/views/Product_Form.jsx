import React, { useEffect, useState } from 'react'
import PageHeader from '@views/PageHeader'
import InputFields from './InputFields'

const Product_Form = () => {
  const btnStyle = 'border-none rounded-lg p-2 cursor-pointer text-white w-20'

  const textFields = [
    {
      label: 'Name', name: 'name', type: 'text',
      validate: (val) => val.trim().length > 0 && val.trim().length < 2 ? 'Name must be at least 2 characters long' : ''
    },
    {
      label: 'Count', name: 'count', type: 'number',
      validate: (val) => val && (Number(val) <= 0 || Number(val) % 1 !== 0) ? 'Count must be positive and integer number' : ''
    },
    {
      label: 'Price ($)', name: 'price', type: 'number',
      validate: (val) => val && (Number(val) <= 0) ? 'Price must be positive number' : ''
    },
    { label: 'Date', name: 'date', type: 'date', validate: () => '' },
    { label: 'Category', name: 'category', tag: 'select', options: ['Electronics', 'Food', 'Clothes'], validate: () => '' },
    {
      label: 'Description', name: 'description', tag: 'textarea',
      validate: (val) => val.trim().length > 200 ? 'Description must be between 0 and 200 characters' : ''
    },
    { label: 'Photo', name: 'photo', type: 'file', validate: () => '' }
  ]

  const [formData, setFormData] = useState({
    name: '',
    count: '',
    price: '',
    date: '',
    category: 'Electronics',
    description: '',
    photo: []
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('')
      }, 3000) // In 3 second

      return () => clearTimeout(timer) // Delete success message
    }
  }, [success])

  const isFormValid =
    formData.date !== '' &&
    formData.name.trim().length >= 2 &&
    Number(formData.count) > 0 &&
    Number(formData.count) % 1 === 0 &&
    Number(formData.price) > 0 &&
    formData.description.trim().length <= 200 &&
    formData.description.trim().length > 0 &&
    formData.photo.length > 0
    ;

  const handleInput = async (e) => {
    e.preventDefault()

    if (isFormValid) {
      const existProduct = JSON.parse(localStorage.getItem('products')) || []

      const lastId = existProduct.length > 0 ? existProduct[existProduct.length - 1].id : 0
      const newId = lastId + 1

      const file = formData.photo[0]
      const basePhoto = await new Promise((resolve) => { // Create base 64 format
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.readAsDataURL(file) // Convert a photo into the long text 
      })

      const newProduct = {
        ...formData,
        id: newId,
        image: basePhoto
      }

      const updateProduct = [...existProduct, newProduct]
      localStorage.setItem('products', JSON.stringify(updateProduct))

      resetForm(e)
      setSuccess('Data added is successfuly!')
    }
  }

  const handleChangeForm = (e) => {
    const { name, value, type, files } = e.target
    const fieldValue = type === 'file' ? Array.from(files) : value
    setFormData(prev => ({
      ...prev, [name]: fieldValue
    }))

    const field = textFields.find(f => f.name === name)
    if (field) {
      setErrors(prev => ({
        ...prev, [name]: field.validate(fieldValue)
      }))
    }
  }

  const resetForm = (e) => {
    e.preventDefault()
    setFormData({ name: '', count: '', price: '', date: '', category: 'Electronics', description: '', photo: [] })
    setErrors({})
  }

  return (
    <>
      <div className='w-full'>
        <PageHeader title="Product Form" />
        {success && (
          <p className='text-green-500'> {success} </p>
        )}
        <form className='border rounded-lg p-4 md:p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {textFields.map(field => (
              <div key={field.name}>
                <InputFields
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={field.type === 'file' ? undefined : formData[field.name]}
                  tag={field.tag || 'input'} onChange={handleChangeForm}
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

export default Product_Form