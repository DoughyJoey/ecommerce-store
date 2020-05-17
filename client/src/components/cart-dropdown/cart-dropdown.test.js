import React from 'react';
// shallow tests render individual components
import { shallow } from 'enzyme';
import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// describe groups tests
describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  // runs before tests
  beforeEach(() => {
    // mock history.push function
    mockHistory = {
      push: jest.fn()
    };

    // mock dispatch function
    mockDispatch = jest.fn();

    // mock properties that are passed in
    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    // renders the cart dropdown and passes in mock properties
    wrapper = shallow(<CartDropdown {...mockProps} />);
  });



  // expect cart dropdown to match snapshot
  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // simulate click event on CartDropdownButton
  it('should call history.push when button is clicked', () => {
    wrapper.find('CartDropdownButton').simulate('click');
    // expect mockHistory.push to be called
    expect(mockHistory.push).toHaveBeenCalled();
    // expect mockDispatch to be called with toggleCartHidden action
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  // ensures equal number of cart items are rendered
  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  // passes in mock props with empty cart
  // expects empty cart to be true
  it('should render EmptyMessageContainer if cartItems is empty', () => {
    // creates mockProps
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    };

    // renders cart dropdown with new mock props with empty cart
    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    // expects EmptyMessageContainer to be true
    expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
  });
});



