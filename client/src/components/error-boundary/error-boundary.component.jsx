import React from 'react';

// styling
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

// class component
// sets error state to false
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  // sets hasErrored to true
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  // error logging
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    // if hasErrored is true, display the error message and image
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png' />
          <ErrorImageText>Sorry, this page is broken!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;