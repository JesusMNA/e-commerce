import React, { useContext } from 'react'
import { Layout } from '../../components/layout'
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../../components/orderCard';

function MyOrder() {
  const {
    order
  } = useContext(ShoppingCartContext);

  return (
    <Layout>
      My Order
      <div className='flex flex-col w-80'>
      {
        order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            id={product.id}
          />
        ))
      }
      </div>
    </Layout>
  )
}

export { MyOrder }