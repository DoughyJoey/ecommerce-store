import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import in user actions from redux
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

// sign in styling
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  // handles submit event
  const handleSubmit = async event => {
    // prevents the default functionality
    event.preventDefault();

    emailSignInStart(email, password);
  };

  // handling change as user is typing
  const handleChange = event => {
    // pulls the value and the name of the event
    const { value, name } = event.target;

    // dynamically sets state
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      {/* form input fields */}
      <form onSubmit={handleSubmit}>
        {/* email field */}
        {/* uses the form input component */}
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        {/* password field */}
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        {/* sign in button */}
        <ButtonsBarContainer>
          {/* uses custom button component */}
          <CustomButton type='submit'> Sign in </CustomButton>
          {/* google sign in button */}
          {/* googleSignInStart from user actions */}
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);