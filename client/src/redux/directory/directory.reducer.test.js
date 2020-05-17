import directoryReducer, { INITIAL_STATE } from './directory.reducer';

// groups tests
describe('directoryReducer', () => {
  // expects undefined to return initial state
  it('should return initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});