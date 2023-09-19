import { CategoryItem } from "../categories/category.types"

export enum CART_ACTION_TYPES {
  SET_CART_DISPLAY = "SET_CART_DISPLAY",
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_CART_COUNT = "SET_CART_COUNT",
  SET_CART_TOTAL = "SET_CART_TOTAL",
  ADD_CART_ITEM = "ADD_CART_ITEM",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  CLEAR_CART_ITEM = "CLEAR_CART_ITEM",
}

export type CartItem = CategoryItem & {
  quantity: number
}
