import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button  from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {

  //redux
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate()
  
  return (
    <div className='cart-dropdown-container' >
      <div className='cart-items'>
       {cartItems?.length ? ( cartItems.map(item => (<CartItem cartItem={item} key={item.id}/>
       ))
       ) : (
         <span className='empty-message'>Your cart is empty</span>
       )
       }
      </div>      
        <Button 
          type='button' 
          onClick={()=> navigate('/checkout')}
        >
          GO TO CHECKOUT
        </Button>
    </div>
  )
}


export default CartDropdown