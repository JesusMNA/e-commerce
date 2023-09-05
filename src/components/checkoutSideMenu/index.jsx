import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import { OrderCard } from '../../components/orderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {

  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setOrder,
    order
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '04.09.23',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd])
    setCartProducts([])
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
      <div className='px-6 overflow-y-scroll flex-1'>
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
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button 
            className='w-full bg-black py-3 text-white  rounded-lg'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }