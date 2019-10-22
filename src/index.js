import React from 'react';
import ReactDOM from 'react-dom';
// syncs the ui with the current url in the browser
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    // BrowserRouter gives the App routing functionality
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
