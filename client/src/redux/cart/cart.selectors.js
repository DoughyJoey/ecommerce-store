// selectors allow us to select only a slice of the state
import { createSelector } from 'reselect';

// set selectCart to the cart state
const selectCart = state => state.cart;

// gets the cart items from the cart
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// gets cart hidden prop from the cart state
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// gets the accumalated cart item quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// gets the total price of cart items
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);