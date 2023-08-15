import { createContext, useEffect, useState } from 'react'


const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains product
  const existingCartItem = cartItems.find(
    (item)=> item.id === productToAdd.id
  )

  //if found, increment quantity
  if(existingCartItem){
    return cartItems.map(item => item.id === productToAdd.id ? 
      {...item, quantity: item.quantity +1}
      : item
      )
  }

  //return new array with modified carItems
  return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
  cartDisplay: false,
  setCartDisplay: ()=> null,
  cartItems: [],
  addItemToCart: () => {},
  countItem: 0,
  changeQuantity: ()=> {},
  removeItemFromCart: ()=> {},
  total: 0,
}) 

export const CartProvider =({children}) => {
  //states
  const [cartDisplay, setCartDisplay] = useState(false)
  const [cartItems, setCarItems] = useState([])
  const [countItem, setCountItem] = useState(0)
  const [total, setTotal] = useState(0)
  
  //funcations
  const countItems = ()=> {
    let count = 0
    count = cartItems.reduce((prev, i) => prev+i.quantity,0)
    return count
  }
  const addItemToCart = (productToAdd) => {
    setCarItems(addCartItem(cartItems, productToAdd))    
  }

  const changeQuantity = (product, value) => {
    let removeItem = false
    setCarItems( cartItems.map(item => {

      if(item.id === product.id && item.quantity === 1 && value < 0)
        removeItem = true

      if(item.id === product.id) {
        return {...item, quantity: item.quantity + value}
      }else {
        return item
      }
    }))

    if(removeItem){
      removeItemFromCart(product)
    }
  }

  const removeItemFromCart = (product) => {
    setCarItems(cartItems.filter(item => item.id !== product.id))
  }

  const sumTotal = ()=> {
    const res = cartItems.reduce((prev, i)=> prev + i.price * i.quantity, 0)
    setTotal(res)
  }

  //hooks
  useEffect(() => {
    setCountItem(countItems())
  }, [cartItems])

  useEffect(() => {
    sumTotal()
  }, [cartItems])

  const value = {cartDisplay, setCartDisplay, addItemToCart, cartItems, countItem, changeQuantity, removeItemFromCart, total}

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}