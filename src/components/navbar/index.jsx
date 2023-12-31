import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context"

const Navbar = () => {
  const {
    count,
    openCheckoutSideMenu,
    closeProductDetail,
    setSearchByCategory
  } = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'

  const openCart = () => {
    openCheckoutSideMenu();
    closeProductDetail();
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink 
            to='/'
            onClick={() => setSearchByCategory('')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            onClick={() => setSearchByCategory('')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            onClick={() => setSearchByCategory('clothing')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            onClick={() => setSearchByCategory('jewelery')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            onClick={() => setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            onClick={() => setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          jesus@gmail.com
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  
          >
            Sign In
          </NavLink>
        </li>
        <li>
            <button 
              className='flex items-center'
              onClick={() => openCart()}
            >
              <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon> 
              <div>
                {count}
              </div>
            </button>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar };