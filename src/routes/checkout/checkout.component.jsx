import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector'

import './checkout.styles.scss'
import CartItemCard from '../../components/cart-item-card/cart-item-card.component'
import { useSelector } from 'react-redux'

const Checkout = () => {
  
  
  //redux
  const cartItems = useSelector(selectCartItems)
  const  total = useSelector(selectCartTotal)

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