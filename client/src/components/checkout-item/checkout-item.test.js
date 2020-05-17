import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './checkout-item.component';

// describe groups tests
describe('CheckoutItem component', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  // runs before tests
  beforeEach(() => {
    // create mockClearItem function
    mockClearItem = jest.fn();
    // create mockAddItem function
    mockAddItem = jest.fn();
    // create mockRemoveItem function
    mockRemoveItem = jest.fn();

    // create mock properties
    const mockProps = {
      cartItem: {
        imageUrl: 'www.image.com',
        price: 208,
        name: 'security',
        quantity: 2
      },
      // sets mockClearItem to clearItem
      // sets mockAddItem to addItem
      // sets mockRemoveItem to removeItem
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem
    };

    // renders checkout item and passes in mock properties
    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  // snapshot test to ensure render matches snapshot
  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // simulates click event on RemoveButtonContainer
  // expects the mockClearItem to have been called
  it('should call clearItem when remove button is clicked', () => {
    wrapper.find('RemoveButtonContainer').simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });

  // simulates mockRemoveItem on QuantityContainer
  it('should call removeItem when left arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(0)
      .simulate('click');

    // expects mockRemoveItem to be called
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  // simulates mockAddItem on QuantityContainer
  it('should call addItem when right arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(2)
      .simulate('click');

    // expects mockAddItem to be called
    expect(mockAddItem).toHaveBeenCalled();
  });
});

