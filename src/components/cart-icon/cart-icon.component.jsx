import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss"


const CartIcon = ({...otherProps}) => {
  return (
    <div className="cart-icon-container" {...otherProps}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  )
}


export default CartIcon