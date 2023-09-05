import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const ProductDetail = () => {

  const {
    isProductDetailOpen,
    closeProductDetail,
    productToShow
  } = useContext(ShoppingCartContext);

  const {
    title,
    price,
    image,
    description
  } = productToShow;

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button
          onClick={() => closeProductDetail()}
        >
          <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
        </button>
      </div>
      <figure className='px-6'>
        <img 
          className='w-full h-full rounded-lg' 
          src={image} 
          alt=''
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${price}</span>
        <span className='font-medium text-md'>{title}</span>
        <span className='font-light text-sm'>{description}</span>
      </p>
    </aside>
  )
}

export { ProductDetail }