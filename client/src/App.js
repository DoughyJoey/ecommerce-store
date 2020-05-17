import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// lazy loading design pattern
// defers loading of page until it is needed
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

// checks user session and sets the currentUser
// checkUserSession passed in from redux user actions
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    // ensures check user session does not keep firing
    // only renders when checkUserSession is called
  }, [checkUserSession]);

  return (
    <div>
      {/* ensures global styles persists throughout the application */}
      <GlobalStyle />
      {/* ensures header persists throughout the application */}
      <Header />
      {/* Switch renders the first match it finds */}
      <Switch>
        {/* error handling */}
        <ErrorBoundary>
          {/* loading spinner */}
          {/* used to implement lazy loading */}
          <Suspense fallback={<Spinner />}>
            {/* application routing */}
            {/* exact ensures page on renders on exact path */}
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            {/* redirects to root after signing in */}
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

// brings in the current user from the users selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// checks the user session
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


/* 
REFERENCES

***************************************************************************************
*    Title: Building a Portfolio Website with React
*    Author: Garrett Love
*    Date: 02/04/2020
*    Code version: n/a
*    Availability: https://www.youtube.com/watch?v=41-jn5tdg50&list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G
*
***************************************************************************************

***************************************************************************************
*    Title: Code-Splitting
*    Author: React
*    Date: 29/03/2020
*    Code version: n/a
*    Availability: https://reactjs.org/docs/code-splitting.html
*
***************************************************************************************

***************************************************************************************
*    Title: How To Setup Payments With Node.js And Stripe
*    Author: Web Dev Simplified
*    Date: 22/02/2020
*    Code version: n/a
*    Availability: https://www.youtube.com/watch?v=mI_-1tbIXQI
*
***************************************************************************************

***************************************************************************************
*    Title: styled-components
*    Author: macintoshhelper
*    Date: 14/02/2020
*    Code version: n/a
*    Availability: https://github.com/styled-components/styled-components
*
***************************************************************************************

***************************************************************************************
*    Title: styled-components
*    Author: macintoshhelper
*    Date: 14/02/2020
*    Code version: n/a
*    Availability: https://github.com/styled-components/styled-components
*
***************************************************************************************

***************************************************************************************
*    Title: React Redux Tutorials - 1 - Introduction
*    Author: Codevolution
*    Date: 13/01/2019
*    Code version: n/a
*    Availability: https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK
*
***************************************************************************************

***************************************************************************************
*    Title: Add Firebase to your JavaScript project
*    Author: Firebase
*    Date: 22/11/2019
*    Code version: n/a
*    Availability: https://firebase.google.com/docs/web/setup
*
***************************************************************************************

***************************************************************************************
*    Title: Getting Started with Create React App
*    Author: Yihua Zhang
*    Date: 13/10/2019
*    Code version: n/a
*    Availability: https://github.com/ZhangMYihua
*
***************************************************************************************


*/