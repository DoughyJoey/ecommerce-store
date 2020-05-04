import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// enables persistence for the application
import { PersistGate } from 'redux-persist/integration/react';

// brings in the persistor from the store
import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

ReactDOM.render(
  // Provider gives us access to redux store.js
  <Provider store={store}>
    {/* BrowserRouter gives us routing functionality */}
    <BrowserRouter>
    {/* wraps the app to enable persistence throughout */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();