import React from 'react';

import Spinner from '../spinner/spinner.component';

// if loading is true, render the spinner
// else, return the wrapped component with the otherProps
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;