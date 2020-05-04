// selectors allow us to select only a slice of the state
import { createSelector } from 'reselect';

// sets selectUser to the user state
const selectUser = state => state.user;

// gets the current user from the users state
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);