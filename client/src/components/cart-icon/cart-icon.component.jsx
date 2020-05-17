import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// cart actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// cart selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// cart icon styling
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

// takes toggleCartHidden from cart actions and an item count prop
export const CartIcon = ({ toggleCartHidden, itemCount }) => (
  // toggles the cart icon
  // displays the item count
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

// brings in the toggleCartHidden action from redux
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// gets the carts accumulated cart item count
// gets from cart selectors in redux
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);