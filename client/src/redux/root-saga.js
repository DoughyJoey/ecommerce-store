import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

// issues and calls all of the other sagas
export default function* rootSaga() {
  // all takes an array of sagas
  // initialises all sagas at once
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}