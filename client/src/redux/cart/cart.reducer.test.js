import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

// creates initial state
const initialState = {
  hidden: true,
  cartItems: []
};

// groups tests
describe('cartReducer', () => {
  // expects undefined to return initial state
  it('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  // expects toggle hidden with toggleHidden action
  it('should toggle hidden with toggleHidden action', () => {
    expect(
      cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_HIDDEN })
        .hidden
    ).toBe(false);
  });

  // expects quantity to be increased by 1 on same item
  it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
    // creates mock item
    const mockItem = {
      id: 1,
      quantity: 3
    };

    // creates mock of previous state
    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    // expects quantity to be 4 when addItem action is fired
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(4);
  });

  // expects quantity to be decreased by 1 on same item
  it('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
    // creates mock item
    const mockItem = {
      id: 1,
      quantity: 3
    };

    // creates mock previous state
    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    // expects quantity to be 2 when removeItem action is fired
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(2);
  });

  // expects item to be remove from cart when clearItemFromCart action is fired
  it('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
    // creates mock item
    const mockItem = {
      id: 1,
      quantity: 3
    };

    // creates mock previous state
    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    // expects item to be cleared from cart
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems.includes(item => item.id === 1)
    ).toBe(false);
  });

  // expects cart to be cleared when clearCart action is fired
  it('should clear cart if clearCart action fired', () => {
    // creates mock previous state
    const mockPrevState = {
      hidden: true,
      cartItems: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
    };

    // expects there to be no items in the cart
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_CART
      }).cartItems.length
    ).toBe(0);
  });
});