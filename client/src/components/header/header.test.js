import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// groups tests
describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  // runs before tests
  beforeEach(() => {
    // create mock sign out start function
    mockSignOutStart = jest.fn();

    // create mock properties
    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123'
      },
      // sets mockSignOutStart to signOutStart
      signOutStart: mockSignOutStart
    };

    // renders header and passes in mock properties
    wrapper = shallow(<Header {...mockProps} />);
  });

  // expects header component to match snapshot
  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // groups tests
  describe('if currentUser is present', () => {
    // expects sign out to be rendered in OptionLink
    it('should render sign out link', () => {
      expect(
        wrapper
          .find('OptionLink')
          .at(2)
          .text()
      ).toBe('SIGN OUT');
    });

    // expects signOutStart to be called when OptionLink is clicked
    it('should call signOutStart method when link is clicked', () => {
      wrapper
        .find('OptionLink')
        .at(2)
        .simulate('click');

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  // groups tests
  describe('if currentUser is null', () => {
    // expects sign in link to get rendered
    it('should render sign in link', () => {
      // create mock properties with currentUser of null
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      // renders header with mock properties
      const newWrapper = shallow(<Header {...mockProps} />);

      // expects sign in to be rendered for OptionLink
      expect(
        newWrapper
          .find('OptionLink')
          .at(2)
          .text()
      ).toBe('SIGN IN');
    });
  });

  // groups tests
  describe('if hidden is true', () => {
    // expects CartDropdown to not get rendered if hidden is true
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  // groups tests
  describe('if hidden is false', () => {

    it('should render CartDropdown', () => {
      // create mock properties
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      // renders header and passes in new props
      const newWrapper = shallow(<Header {...mockProps} />);

      // expects cart dropdown to be rendered
      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});