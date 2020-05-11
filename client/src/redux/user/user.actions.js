// imports constant user types
import UserActionTypes from './user.types';

// actions are functions that return objects

// google sign in action called
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

// sign in action was successful
export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

// sign in action failed
export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

// email and password sign in action start
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

// check user session action
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

// sign out action start
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

// sign out action succeeded
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

// sign out action failed
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

// sign up action start 
export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

// sign up action succeeded
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

// sign up action failed
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});