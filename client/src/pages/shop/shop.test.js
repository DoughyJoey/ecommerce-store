import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ShopPage } from './shop.component';

// creates a mock store
export const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null
    }
  };
};

// groups tests
describe('ShopPage', () => {
  let wrapper;
  let mockFetchCollectionsStart;
  let store;

  // runs before tests
  beforeEach(() => {

    // creates a mock reducer
    const mockReducer = (
      state = {
        isFetching: true
      },
      action
    ) => state;

    // creates a mock state
    const mockState = {
      shop: {
        isFetching: true
      }
    };

    // create a mockFetchCollectionsStart function
    mockFetchCollectionsStart = jest.fn();

    // sets store to createMockStore
    store = createMockStore({
      // sets state mockState
      state: mockState,
      // sets reducers to mockReducer
      reducers: { shop: mockReducer }
    });

    // creates mock match
    const mockMatch = {
      path: ''
    };

    // create mock props
    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionsStart
    };

    // create mount HOC
    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ShopPage {...mockProps} />
        </Provider>
      </BrowserRouter>
    );
  });

  // expects ShopPage to match snapshot
  it('should render ShopPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // expects mockFetchCollectionsStart to get called
  it('should render ShopPage component', () => {
    expect(mockFetchCollectionsStart).toHaveBeenCalled();
  });
});