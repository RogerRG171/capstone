import { CartItem } from "./cart.types"
import { AnyAction } from "redux"
import { setCartDisplay, setCartItems } from "./cart.action"

export type CartState = {
  readonly cartDisplay: boolean
  readonly cartItems: CartItem[]
}

const CART_INITIAL_STATE: CartState = {
  cartDisplay: false,
  cartItems: [],
}

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
): CartState => {
  if (setCartDisplay.match(action)) {
    return {
      ...state,
      cartDisplay: action.payload,
    }
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    }
  }

  return state
}
