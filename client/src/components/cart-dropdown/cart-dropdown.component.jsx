import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// cart selector
import { selectCartItems } from '../../redux/cart/cart.selectors';
// cart action
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
// component
import CartItem from '../cart-item/cart-item.component';

// cart dropdown styles
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

// passes in cartItems, history and dispatch
// history prop used to navigate to checkout page
// dispatch used to hide cart
export const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {/* if the length is greater than 0, render the cart items */}
      {/* Else, render your cart is empty */}
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    {/* Button goes to the checkout page */}
    {/* toggleCartHidden hides cart after navigating to checkout page */}
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

// selects cart items from state and passes in as props to component
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));