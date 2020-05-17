import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsOverview } from './collections-overview.component';

// expects collection overview to match snapshot
it('should render CollectionsOverview component', () => {
  expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
});