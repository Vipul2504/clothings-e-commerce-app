import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import cartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {cartItems.map(CartItem => (<cartItem key={cartItem.id} item={cartItem}/>))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({cart:{CartItems}}) => ({
  CartItems
})

export default connect(mapStateToProps)(CartDropdown);
