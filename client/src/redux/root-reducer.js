// root reducer is the base reducer that represents the entire state of the application

import { combineReducers } from 'redux';
// persists the reducer
import { persistReducer } from 'redux-persist';
// gives us the local storage object
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// persist configuration
// starts storing at the root
// persists the cart
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

// combines reducers into one giant object
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

// exports a persisted version of the root reducer
export default persistReducer(persistConfig, rootReducer);