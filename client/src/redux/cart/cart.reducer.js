import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

// sets the carts initial state
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

// takes an initial state and an action
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // returns toggle action
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    // returns add item action
    // calls the addItemToCart function in cart.util.js
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    // returns remove item action
    // calls the removeItemFromCart function in cart.util.js
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    // clears checkout cart item
    // keeps the cart items where the cartItem.id !== action.payload.id
    // returns a new array of cart items
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case CartActionTypes.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;