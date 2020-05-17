import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './directory.component';

// expects directory component to match snapshot
it('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});