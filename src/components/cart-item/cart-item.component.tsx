import { CartItem } from "../../store/cart/cart.types"
import "./cart-item.styles.scss"
import { FC } from "react"

export type CartItemProps = {
  cartItem: CartItem
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, imageUrl, price } = cartItem
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="name">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
