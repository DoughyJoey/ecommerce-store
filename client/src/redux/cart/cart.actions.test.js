import CartActionTypes from './cart.types';
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart
} from './cart.actions';

// groups tests
// toggleCartHidden actions
describe('toggleCartHidden action', () => {
  // expects toggleCartHidden action to be created
  it('should create the toggleHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

// groups tests
// addItem action
describe('addItem action', () => {
  // expects addItem action to be created
  it('should create the addItem action', () => {
    // create mock item
    const mockItem = {
      id: 1
    };

    const action = addItem(mockItem);

    // expects action to equal add item action
    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    // expects the action payload to equal the mock item
    expect(action.payload).toEqual(mockItem);
  });
});

// groups test
// removeItem action
describe('removeItem action', () => {
  it('should create the removeItem action', () => {
    //creates mock item
    const mockItem = {
      id: 1
    };

    const action = removeItem(mockItem);

    // expects action to equal remove item action
    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    // expects the action payload to equal the mock item
    expect(action.payload).toEqual(mockItem);
  });
});

// groups tests
describe('clearItemFromCart action', () => {
  it('should create the clearItemFromCart action', () => {
    //creates mock item
    const mockItem = {
      id: 1
    };

    const action = clearItemFromCart(mockItem);

    // expects action to equal clear item action
    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    // expects the action payload to equal the mock item
    expect(action.payload).toEqual(mockItem);
  });
});

// groups tests
describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    // expects clearCart action to equal CLEAR_CART action
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });
});