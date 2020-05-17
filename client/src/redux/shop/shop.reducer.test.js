import ShopActionTypes from './shop.types';
import shopReducer from './shop.reducer';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};


describe('shopReducer', () => {
  // expects initial state to be returned
  it('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  // expects isFetching to be true on fetch colelctions start action
  it('should set isFetching to true if fetchingCollectionsStart action', () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
    // create mock items
    const mockItems = [{ id: 1 }, { id: 2 }];
    // expect fetch collection success to set isFetching to false and set payload as mockitems
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      collections: mockItems
    });
  });

  it('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
    // expects fetch collection failure action to set isFetching to false and return error as payload
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    });
  });
});