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

  // Get Products filtered
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Get Products by title
  const [searchByTitle, setSearchByTitle] = useState('');
  
  // Get Products by category
  const [searchByCategory, setSearchByCategory] = useState('');
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []) 

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()))
  }
  
  const filteredItemsByCategory = (items, searchByCategory) => {
    console.log(items)
    return items?.filter(item => item.category.toLocaleLowerCase().includes(searchByCategory.toLocaleLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()));
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (!searchByCategory && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    if (!searchByCategory && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (searchByCategory && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory]) 

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
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext }