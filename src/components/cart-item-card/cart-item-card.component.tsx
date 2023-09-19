import { selectCartItems } from "../../store/cart/cart.selector"
import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.action"

import { useDispatch, useSelector } from "react-redux"

import "./cart-item-card.styles.scss"
import { CartItem } from "../../store/cart/cart.types"

export type CartItemCardProps = {
  item: CartItem
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const { imageUrl, name, quantity, price } = item
  //redux
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  //functions
  const handleReduceQuantity = (item: CartItem) => {
    dispatch(removeItemFromCart(cartItems, item))
  }

  const handleAddQuantity = (item: CartItem) => {
    dispatch(addItemToCart(cartItems, item))
  }

  const handleClearItemFromCart = (item: CartItem) => {
    dispatch(clearItemFromCart(cartItems, item))
  }

  return (
    <div className="cart-item-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <span>{name}</span>
      <div className="quantity-container">
        <span className="cursor" onClick={() => handleReduceQuantity(item)}>
          &#10094;
        </span>
        <span>{quantity}</span>
        <span className="cursor" onClick={() => handleAddQuantity(item)}>
          &#10095;
        </span>
      </div>
      <span>${price}</span>
      <span className="remove" onClick={() => handleClearItemFromCart(item)}>
        &#10005;
      </span>
    </div>
  )
}

export default CartItemCard
