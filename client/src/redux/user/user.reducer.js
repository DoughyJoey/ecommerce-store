// user reducer handles the users state

// imports constant user types
import UserActionTypes from './user.types';

// sets the initial state of the user
const INITIAL_STATE = {
  currentUser: null,
  error: null
};

// passes the initial state and an action
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // sign in sucess action
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    // sign out success action
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    // if none of the above actions matched, return the state
    default:
      return state;
  }
};

export default userReducer;