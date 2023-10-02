import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart ° Icrement quantity
  const [count, setCount] = useState(0);

  // Shopping Cart ° Add Products to cart
  const [cartProducts, setCartProducts] = useState([])
  
  // Shopping Cart ° Order
  const [order, setOrder] = useState([]);

  // Checkout Side Menu ° Add Products to cart
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  
  // Product Detail ° Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  // Product Detail ° Show product
  const [productToShow, setProductToShow] = useState({})

  // Get Products
  const [items, setItems] = useState([]);
  console.log(items)

  // Get Products filtered
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Get Products by title
  const [searchByTitle, setSearchByTitle] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []) 

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle]) 

  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext }