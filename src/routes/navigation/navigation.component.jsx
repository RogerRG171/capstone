import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from './../../components/cart-dropdown/cart-dropdown.component';

import "./navigation.styles.scss"
import { CartContext } from '../../context/cart.context';

const Navigation = () => {

  //context
  const {currentUser} = useContext(UserContext)
  const {cartDisplay, setCartDisplay} = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          { currentUser ? (          
            <span className='nav-link' onClick={signOutUser}>
              SING OUT            
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SING IN            
            </Link>
          )}
          <CartIcon onClick={()=>setCartDisplay(!cartDisplay)}/>
        </div>
        {cartDisplay && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation