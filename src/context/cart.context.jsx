import { createContext, useState } from 'react'

export const CartContext = createContext({
  cartDisplay: false,
  setCartDisplay: ()=> null
}) 

export const CartProvider =({children}) => {
  //states
  const [cartDisplay, setCartDisplay] = useState(false)
  const value = {cartDisplay, setCartDisplay}
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}