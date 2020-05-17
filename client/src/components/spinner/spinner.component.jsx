import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

// displays a spinner component
// displays when page is in loading state
const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;