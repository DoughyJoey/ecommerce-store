import React from 'react';
import { shallow } from 'enzyme';
import { CollectionPreview } from './collection-preview.component';

// describe groups tests
describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'security';

  // runs before tests
  beforeEach(() => {
    // mock path
    mockMatch = {
      path: '/shop'
    };

    // mock history.push function
    mockHistory = {
      push: jest.fn()
    };

    // creates mock properties
    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'security',
      items: []
    };

    // renders collection preview and passes in mock properties
    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  // expects collection preview to match snapshot
  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // simulates click on TitleContainer
  // expects mock history.push to be called on correct string
  it('should call history.push with the right string when TitleContainer clicked', () => {
    wrapper.find('TitleContainer').simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    );
  });
});