import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { OrderCard } from '../../components/orderCard'

const CheckoutSideMenu = () => {

  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts)
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button
          onClick={() => closeCheckoutSideMenu()}
        >
          <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
        </button>
      </div>
      <div className='px-6 overflow-y-scroll'>
      {
        cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
            id={product.id}
          />
        ))
      }
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }