import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { IoReturnUpBack } from 'react-icons/io5'
import useLocaleStorage from '../hooks/useLocaleStorage'

const Product_Detail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)

    const [products] = useLocaleStorage('products', [])

    useEffect(() => {
        const foundProduct = products.find(p => p.id === Number(id))
        setProduct(foundProduct)
    }, [id])

    if (!product) return <p>Product doesn't exist</p>

    return (
        <>
            <PageHeader title={product.name} />
            <div className='bg-blue-200 dark:bg-gray-800 rounded-lg p-5 w-full max-w-4xl m-auto'>
                <button onClick={() => navigate(-1)} className='bg-blue-800 dark:bg-blue-600 text-white font-bold text-xl rounded-lg w-10 h-10 
                cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-400 flex items-center justify-center mb-4'>
                    <IoReturnUpBack />
                </button>
                <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                    <div className='flex-shrink-0'>
                        <img src={product.image} className='h-40 md:h-60 w-full md:w-72 object-cover rounded' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-bold text-lg text-gray-900 dark:text-white'>Product name: <span className='font-normal text-gray-900 dark:text-white'>{product.name}</span></h2>
                        <p className='text-gray-900 dark:text-white'>Product count: <span className='font-semibold text-gray-900 dark:text-white'>{product.count}</span></p>
                        <p className='text-gray-900 dark:text-white'>Product price: <span className='font-semibold text-gray-900 dark:text-white'>{product.price} $</span></p>
                        <p className='text-gray-900 dark:text-white'>Product category: <span className='font-semibold text-gray-900 dark:text-white'>{product.category}</span></p>
                        <p className='text-gray-900 dark:text-white'>Product added date: <span className='font-semibold text-gray-900 dark:text-white'>{product.date}</span></p>
                        <p className='text-gray-900 dark:text-white'>Product description: <span className='font-semibold text-gray-900 dark:text-white'>{product.description}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product_Detail