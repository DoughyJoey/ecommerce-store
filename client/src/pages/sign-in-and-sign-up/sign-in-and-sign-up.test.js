import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUpPage from './sign-in-and-sign-up.component';

// expects SignInAndSignUpPage to match snapshot
it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});