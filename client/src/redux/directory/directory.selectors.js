import { createSelector } from 'reselect';

// sets selectDirectory to the current directory state
const selectDirectory = state => state.directory;

// gets the directory sections
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);