import ShopActionTypes from './shop.types';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync
} from './shop.actions';


// fetch collection start action
describe('fetchCollectionsStart action', () => {
  // expects fetchCollectionsStart action to be created
  it('should create the fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_START
    );
  });
});

// fetch collection success action
describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSuccess action', () => {
    // create mock collections map
    const mockCollectionsMap = {
      security: {
        id: 1
      }
    };

    // passes in mockCollectionsMap
    const action = fetchCollectionsSuccess(mockCollectionsMap);

    // expects fetch collection success action to be created
    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

// fetch collection failure action
describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('errored');

    // expects fetch collection failure action to be created
    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});

// fetchCollectionsStartAsync action
describe('fetchCollectionsStartAsync action', () => {
  it('should create the fetchCollectionsStartAsync action', () => {
    const mockActionCreator = fetchCollectionsStartAsync();
    // creates dispatch function
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);

    // expects fetchCollectionsStartAsync action to be created
    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});