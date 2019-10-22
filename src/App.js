import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// link to homepage component
import HomePage from './pages/homepage/homepage.component';

const HomeSecurity = () => (
  <div>
    <h1>Home Security</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/security' component={HomeSecurity} />
      </Switch>
    </div>
  );
}

export default App;
