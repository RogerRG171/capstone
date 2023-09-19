import { selectCartCount } from "../../store/cart/cart.selector"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import "./cart-icon.styles.scss"
import { useSelector } from "react-redux"

const CartIcon = ({ ...otherProps }) => {
  //redux
  const countItem = useSelector(selectCartCount)

  return (
    <div className="cart-icon-container" {...otherProps}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countItem}</span>
    </div>
  )
}

export default CartIcon
