import React, { useEffect, useState } from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import PageHeader from '../components/PageHeader'
import InputFields from '../components/InputFields'
import { useNavigate, useParams } from 'react-router-dom'

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
    { label: 'Photo', name: 'photo', type: 'text', placeholder: 'https://example.com/image.png', validate: () => '' }
  ]

  const [formData, setFormData] = useState({
    name: '',
    count: '',
    price: '',
    date: '',
    category: 'Electronics',
    description: '',
    photo: ''
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

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const existProduct = JSON.parse(localStorage.getItem('products')) || []
      const foundProduct = existProduct.find(p => p.id === Number(id))

      if (foundProduct) {
        setFormData({
          ...foundProduct,
          photo: foundProduct.image
        })
      }
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFormValid) {
      const existProduct = JSON.parse(localStorage.getItem('products')) || []

      if (id) {
        const updateProduct = existProduct.map(p =>
          p.id === Number(id) ? { ...formData, id: Number(id), image: formData.photo } : p
        )
        localStorage.setItem('products', JSON.stringify(updateProduct))
        setSuccess('Product updated successfully!')
      } else {
        const lastId = existProduct.length > 0 ? existProduct[existProduct.length - 1].id : 0
        const newId = lastId + 1

        const newProduct = {
          ...formData,
          id: newId,
          image: formData.photo
        }

        const updateProduct = [...existProduct, newProduct]
        localStorage.setItem('products', JSON.stringify(updateProduct))
        setSuccess('Product added successfully!')
        resetForm(e)
      }

      setTimeout(() => { navigate('/app/product') }, 1000);
    }
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
    setFormData({ name: '', count: '', price: '', date: '', category: 'Electronics', description: '', photo: [] })
    setErrors({})
  }

  return (
    <>
      <div className='w-full'>
        <PageHeader title={id ? 'Edit product' : 'Add product'} />
        {success && (
          <p className='flex justify-center items-center m-auto gap-3 w-50 text-xs text-green-600 text-center bg-green-50 
          border border-green-200 rounded p-2'> <IoIosCheckmarkCircleOutline />  {success} </p>
        )}
        <form onSubmit={handleSubmit} className='border rounded-lg p-4 md:p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {textFields.map(field => (
              <div key={field.name}>
                <InputFields
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  tag={field.tag || 'input'} onChange={handleChangeForm}
                  className={errors[field.name] ? 'border-red-500' : ''}
                  parentClassName='flex-col md:flex-row md:gap-5 md:items-center'
                >
                  {field.tag === 'select' && field.options.map(opt => (
                    <option key={opt} value={opt}> {opt} </option>
                  ))}
                </InputFields>
                {errors[field.name] && (
                  <p className='text-red-500 text-xs mt-1 ml:md-20'> {errors[field.name]} </p>
                )}
              </div>
            ))}
          </div>

          <div className='flex justify-center items-center gap-5 mt-15'>
            <button className={`${btnStyle} ${isFormValid ? 'bg-green-500 hover:bg-[#A0D585]' : 'cursor-not-allowed bg-gray-400'}  `}
              type='submit' disabled={!isFormValid}>Submit</button>
            <button className={`${btnStyle} bg-amber-600 hover:bg-amber-700 `} onClick={resetForm} >Reset</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Product_Form