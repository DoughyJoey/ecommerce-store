import React from 'react';

// form input styles
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';


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