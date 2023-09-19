import { createSelector } from "reselect"
import { CartState } from "./cart.reducer"
import { RootState } from "../store"

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartDisplay = createSelector(
  [selectCartReducer],
  (cart) => cart.cartDisplay
)

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
)

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)
