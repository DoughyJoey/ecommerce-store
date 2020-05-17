import React from 'react';

// form input styles
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

// generic form input that can be used for both sign in and sign up component
// gets props for either sign in or sign up component
const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    {/* passes in all the props */}
    <FormInputContainer onChange={handleChange} {...props} />
    {/* selectively renders label */}
    {/* uses the shrink prop whenever a user has typed something */}
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;