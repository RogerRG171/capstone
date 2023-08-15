import { useContext } from 'react'
import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss'

import  Button  from '../button/button.component';

const ProductCard = ({product}) => {
  const {imageUrl, name, price} = product
  //context
  const {addItemToCart} = useContext(CartContext)

  //functions
  const addProductToCart = ()=>addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' 
        type='button' 
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard