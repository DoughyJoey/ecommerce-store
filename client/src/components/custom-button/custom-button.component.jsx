import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

// stateless functional component
// renders a button component
// spread in all the properties
// e.g if the property is to handle a submit
export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;