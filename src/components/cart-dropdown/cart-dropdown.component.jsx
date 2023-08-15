import { useContext } from 'react';

import Button  from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

  //context
  const { cartItems } = useContext(CartContext)
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