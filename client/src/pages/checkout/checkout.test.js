import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutPage } from './checkout.component';

let wrapper;

// runs before tests
beforeEach(() => {
  // creates mock props
  const mockProps = {
    cartItems: [],
    total: 230
  };

  // renders checkoutpage with mock props
  wrapper = shallow(<CheckoutPage {...mockProps} />);
});

// expects checkout page to match snapshot
it('should render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot();
});