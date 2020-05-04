/* utility functions enable us to keep files clean and organise
   functions that may be needed in multple files */

// takes all the cart items currently in the array and the cart item to be added
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // checks if the cart item alreadt exists
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // if the cart item exists, increment the quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        // if it doesn't exist, return original cart item
        : cartItem
    );
  }

  // returns array with existing cart items and the new item
  // has a base quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// takes all the cart items currently in the array and the cart item to be removed
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // checks if the cart item alreadt exists
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  // removes the cart item but keeps any other cart items
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  // iterates through the cart items
  // decreases cart item quanity by 1
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};