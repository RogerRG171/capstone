import { useContext, useEffect, useState } from 'react'
import { CartContext } from './../../context/cart.context'

import './checkout.styles.scss'
import CartItemCard from '../../components/cart-item-card/cart-item-card.component'

const Checkout = () => {
  
  
  //context
  const {cartItems, total} = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
        {cartItems && cartItems.map(item => <CartItemCard item={item} key={item.id} />)}
        <span className='total'>Total: ${total}</span>
    </div>
  )
}

export default Checkout