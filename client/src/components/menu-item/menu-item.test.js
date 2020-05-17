import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from './menu-item.component';

// groups tests
describe('MenuItem component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = '/security';
  const size = 'large';
  const imageUrl = 'testimage';

  // runs before tests
  beforeEach(() => {
    // mock match on shop url
    mockMatch = {
      url: '/shop'
    };

    // creates mock history.push function
    mockHistory = {
      push: jest.fn()
    };

    // creates mock properties
    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: 'security',
      imageUrl
    };

    // renders menu item and passes in mock props
    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  // expects menu item to match snapshot
  it('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // expects history.push click event to get called on MenuItemContainer
  it('should call history.push with the right string when MenuItemContainer clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  // expects size to get passed to MenuItemContainer
  it('should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
  });

  // expects imageUrl prop to get passed to BackgroundImageContainer
  it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(
      imageUrl
    );
  });
});