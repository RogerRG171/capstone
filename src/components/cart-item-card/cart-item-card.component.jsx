import { useContext } from 'react'

import './cart-item-card.styles.scss'
import { CartContext } from '../../context/cart.context'


const CartItemCard = ({item}) => {
  const {imageUrl, name, quantity, price} = item
  //context
  const {changeQuantity, removeItemFromCart} = useContext(CartContext)
  return (
    <div className='cart-item-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <span>{name}</span>
      <div className='quantity-container'>
        <span className='cursor' onClick={()=>changeQuantity(item, -1)}>&#10094;</span>
        <span>{quantity}</span>
        <span className='cursor' onClick={()=>changeQuantity(item, 1)}>&#10095;</span>
      </div>
      <span>${price}</span>
      <span className='remove' onClick={()=>removeItemFromCart(item)}>&#10005;</span>
    </div>
  )
}

export default CartItemCard