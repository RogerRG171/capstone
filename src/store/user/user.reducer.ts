import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed,
  signUpFailed,
} from "./user.action"
import { UserData } from "../../utils/firebase/firebase.utils"
import { AnyAction } from "redux"

export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: boolean
  readonly error: Error | null
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload, error: null }
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null, error: null }
  }
  if (signInFailed.match(action)) {
    return { ...state, error: action.payload }
  }
  if (signOutFailed.match(action)) {
    return { ...state, error: action.payload }
  }
  if (signUpFailed.match(action)) {
    return { ...state, error: action.payload }
  }

  return state
}
