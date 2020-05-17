import CartActionTypes from './cart.types';

// cart toggle action
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// add item to cart action
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

// remove item to cart action
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

// removes item from checkout page
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

// clears cart on sign out
export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

// updates cart in firebase
export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

// pulls cart items and sets them from firebase
export const setCartFromFirebase = cartItems => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});