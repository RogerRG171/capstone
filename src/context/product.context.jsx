import { createContext, useEffect, useState } from 'react'


import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: ()=> null
})

export const ProductProvider = ({children})=> {

  //states
  const [products, setProducts] = useState(PRODUCTS)
  const value = {products, setProducts}

  return(
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}