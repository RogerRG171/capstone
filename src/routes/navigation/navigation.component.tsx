import React, { Fragment, ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { signOutStart } from "../../store/user/user.action"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "./../../components/cart-dropdown/cart-dropdown.component"
import {
  selectCurrentUser,
  selectUserError,
} from "../../store/user/user.selector"
import { selectCartDisplay } from "../../store/cart/cart.selector"
import { setCartDisplay } from "../../store/cart/cart.action"

import "./navigation.styles.scss"

const Navigation = () => {
  //redux
  const currentUser = useSelector(selectCurrentUser)
  const error = useSelector(selectUserError)
  const cartDisplay = useSelector(selectCartDisplay)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={() => dispatch(signOutStart())}>
              SING OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SING IN
            </Link>
          )}
          <CartIcon onClick={() => dispatch(setCartDisplay(!cartDisplay))} />
        </div>
        {cartDisplay && <CartDropdown />}
      </div>
      {error && (alert(`${error}`) as ReactNode)}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
