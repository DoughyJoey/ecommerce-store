import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './form-input.component';

// describe groups tests
describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;

  // runs before tests
  beforeEach(() => {
    // create mock handle change function
    mockHandleChange = jest.fn();

    // creates mock properties
    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    // renders form input and passes in mock properties
    wrapper = shallow(<FormInput {...mockProps} />);
  });

  // expects form input component to match snapshot
  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // simulates change event and expects mockHandleChange to be called
  it('should call handleChange method when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  // expects FormInputLabel to be rendered
  it('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  });

  // expects FormInputLabel to NOT be rendered
  it('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    // renders FormInput with new mock properties 
    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    // expects FormInputLabel to be false
    expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });
});