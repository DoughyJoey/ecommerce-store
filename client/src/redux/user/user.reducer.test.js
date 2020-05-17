import UserActionTypes from './user.types';
import userReducer from './user.reducer';

// creates initial state
const initialState = {
  currentUser: null,
  error: null
};

// describe groups tests
describe('userReducer', () => {
  // expects initial state to be returned
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  // expects payload to get set to current user on successfull sign in
  it('should set currentUser to payload on signInSuccess action', () => {
    // creates mock user
    const mockUser = { id: 1, displayName: 'Joe' };

    // expects currentUser to equal mockUser on sign in success
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser
      }).currentUser
    ).toEqual(mockUser);
  });

  // expects current user to be null on sign out success
  it('should set currentUser to null on signOutSuccess action', () => {
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_OUT_SUCCESS
      }).currentUser
    ).toBe(null);
  });

  // expects payload to be errorMessage on failure
  it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
    // create mockError
    const mockError = {
      message: 'errored',
      code: 404
    };

    // expect error to be mockError on sign in failure
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);

    // expect error to be mockError on sign up failure
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);

    // expect error to be mockError on sign out failure
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);
  });
});