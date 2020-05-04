// used so we can catch user actions and log the information
import { createStore, applyMiddleware } from 'redux';
// allows the browser to cache the store
import { persistStore } from 'redux-persist';
// logger can be used to debug redux
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// persistor is a persisted version of the store
export const persistor = persistStore(store);

export default { store, persistStore };