import { AnyAction } from "redux"
import { Category } from "./category.types"
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./category.action"

export type CategoryState = {
  readonly categories: Category[]
  readonly isLoading: boolean
  readonly error: Error | null
}

const INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
}

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): CategoryState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true }
  }
  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false }
  }
  if (fetchCategoriesFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: false }
  }

  return state
}
