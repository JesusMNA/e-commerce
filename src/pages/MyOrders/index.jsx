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
      My Orders
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