import React, { useEffect, useState } from 'react'
import PageHeader from '@views/PageHeader'
import { FaEdit, FaEye } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const btnStyle = 'text-white rounded-lg p-2 cursor-pointer'

  const navigate = useNavigate()

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('products')) || []
    setProductList(savedData)
  }, [])

  const deleteCard = (id) => {
    const updateList = productList.filter(item => item.id != id)
    setProductList(updateList)
    localStorage.setItem('products', JSON.stringify(updateList))
  }

  return (
    <>
      <PageHeader title="Products" />
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-wrap justify-start gap-4 md:gap-7'>
          {productList.map(item => (
            <div key={item.id} className='border-none rounded-lg p-3 bg-[#406093] dark:bg-gray-700 text-white hover:scale-110 transition 
            duration-400 font-medium text-center'>
              <img src={item.image} className='border-none rounded-lg bg-white dark:bg-gray-500 mb-3 h-24 md:h-30 w-32 md:w-45' />
              <p className='mb-3 text-xl'> {item.name} </p>
              <p className='mb-3 text-lg text-[#FFA95A]'> {item.price} $ </p>
              <p className='mb-5 font-normal text-sm text-[#E8E2D8] break-words max-w-[200px]'> {item.description} </p>
              {/* <p className='mb-2'> Count: {item.count} </p> */}
              {/* <p className='mb-2'> Category: {item.category} </p> */}
              <div className='flex justify-center align-center gap-3'>
                <button className={`${btnStyle} bg-yellow-500`} onClick={() => navigate(`/app/product/${item.id}`)} > <FaEye /> </button>
                <button className={`${btnStyle} bg-blue-500`}> <FaEdit /> </button>
                <button className={`${btnStyle} bg-red-500`} onClick={() => deleteCard(item.id)}> <FaDeleteLeft /> </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products