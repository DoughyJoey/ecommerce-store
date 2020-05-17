import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './homepage.component';

// expects the homepage component to match the snapshot
it('should render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});