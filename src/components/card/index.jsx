import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = ({ items }) => {

  const {
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    closeCheckoutSideMenu
  } = useContext(ShoppingCartContext)

  const {
    category,
    title,
    price,
    image,
    id
  } = items;

  const showProduct = (productDetail) => {
    openProductDetail();
    closeCheckoutSideMenu();
    setProductToShow(productDetail);
  }

  const addProductsToCart = (productData) => {
    setCount(state => state + 1);
    setCartProducts([...cartProducts, productData])
  }

  const renderIcon = () => {

    const isInCard = cartProducts.filter(product => product.id === id).length > 0;

    if (isInCard) {
      return (
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
        >
          <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
        </div>
      )
    } else {
      return (
        <button 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => addProductsToCart(items)}
        >
          <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
        </button>
      ) 
    }
  }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg mb-3"
      onClick={() => showProduct(items)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt="headphones"/>
        {renderIcon()}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
}

export { Card }