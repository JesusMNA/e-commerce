import React, { useContext } from 'react'
import { Layout } from '../../components/layout'
import { Card } from '../../components/card'
import { ProductDetail } from '../../components/productDetail';
import { ShoppingCartContext } from '../../context';

function Home() {

  const { items, setSearchByTitle, searchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    if ( filteredItems.length > 0 ) {
      return (
        filteredItems.map(item => 
          <Card key={item.id} items={item}/>
        )
      )
      } else {
      return (
        <div>There are no coincidences</div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 className='font-medium text-xl mb-4'>Products</h1>
      </div>
      <input 
        type='text' 
        placeholder='Search a product' 
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-xl'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }