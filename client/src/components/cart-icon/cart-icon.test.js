import React from 'react';
// shallow tests render individual components
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon.component';

// describe groups tests
describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;

  // runs before tests
  beforeEach(() => {
    // creates a mockToggleCartHidden function
    mockToggleCartHidden = jest.fn();

    // creates mock properties that are passed in
    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden
    };

    // renders the cart icon component and passes in mock properties
    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  // runs snapshot test on cart icon component
  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // simulate toggleCartHidden click event on cart icon
  it('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartContainer').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  // test expects item count to be rendered as text
  it('should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    expect(itemCount).toBe(0);
  });
});