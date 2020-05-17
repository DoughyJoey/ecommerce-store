import { takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';
import { clearCartOnSignOut, onSignOutSuccess } from './cart.sagas';

// groups tests
// sign out success
describe('on signout success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

// groups tests
// clear cart on sign out
describe('clear cart on signout saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});