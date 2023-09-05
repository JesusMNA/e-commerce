import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { Card } from '../../components/card'
import { ProductDetail } from '../../components/productDetail';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-xl'>
        {
          items.map(item => 
            <Card key={item.id} items={item}/>
          )
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }