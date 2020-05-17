import React from 'react';
import { shallow } from 'enzyme';
import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';

// groups tests
describe('WithSpinner HOC', () => {
  // creates test component
  const TestComponent = () => <div className='test' />;
  // wraps the TestComponent with WithSpinner component
  const WrappedComponent = WithSpinner(TestComponent);

  // groups tests
  // if loading is true
  describe('if loading is true', () => {
    // expects spinner component to get rendered
    it('should render Spinner component', () => {
      // renders wrapped component with is loading set to true
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      // expects spinner to get rendered
      expect(wrapper.exists(Spinner)).toBe(true);
    });

    // expects spinner to not get rendered
    it('should not render component', () => {
      // renders wrapped component with is loading set to true
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      // expects TestComponent to not get rendered
      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  // groups tests
  // if loading is false
  describe('if loading is false', () => {
    it('should render component', () => {
      // renders wrapped component with is loading set to false
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      // expects TestComponent to be rendered
      expect(wrapper.exists(TestComponent)).toBe(true);
    });


    it('should not render Spinner', () => {
      // renders wrapped component with is loading set to false
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      // expects spinner to not be rendered
      expect(wrapper.exists(Spinner)).toBe(false);
    });
  });
});