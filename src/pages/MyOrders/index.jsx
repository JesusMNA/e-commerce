import React, { useContext } from 'react'
import { Layout } from '../../components/layout'
import { OrdersCard } from '../../components/ordersCard'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

function MyOrders() {
  const {
    order
  } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 className='font-medium text-xl mb-4'>My Orders</h1>
      </div>
      {
        order.map((order, index) => (
          <Link to={`/my-orders/${index}`} key={index}>
            <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>
  )
}

export { MyOrders }