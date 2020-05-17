import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

// snapshot test to ensure cart item is rendered correctly
it('should render CartItem component', () => {
  // creates a mock item
  const mockItem = {
    imageUrl: 'www.image.com',
    price: 55,
    name: 'Yeelight',
    quantity: 2
  };

  // renders cart item and passes in mock items
  // expects cart item component to match snapshot
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});