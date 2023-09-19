import { addItemToCart } from "../../store/cart/cart.action"

import "./product-card.styles.scss"

import Button from "../button/button.component"
import { useDispatch, useSelector } from "react-redux"

import { selectCartItems } from "../../store/cart/cart.selector"
import { CategoryItem } from "../../store/categories/category.types"

export type ProductCardProps = {
  product: CategoryItem
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { imageUrl, name, price } = product

  //redux
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  //functions
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" type="button" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
