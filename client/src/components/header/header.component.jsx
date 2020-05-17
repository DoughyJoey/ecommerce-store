import React from 'react';
// connect is a higher order component that gives us access to redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// conponents
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// redux selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// redux actions
import { signOutStart } from '../../redux/user/user.actions';

// { ReactComponent as Logo } special syntax for importing SVG
import { ReactComponent as Logo } from '../../assets/smart-home.svg';

// header styling
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

// passes in current user, hidden (cart), signOutStart (user actions)
export const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    {/* sets logo as link to root */}
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    {/* options container for our shop, contact, sign up, and cart links */}
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {/* conditionally renders sign out or sign in link */}
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {/* creates cart toggling effect */}
    {/* renders either cart icon or cart dropdown component */}
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// brings in currentUser and hidden values from redux
// mapStateToProps: It connects redux state to props of react component.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

// brings in the signOutStart action
//mapDispatchToProps: It connects redux actions to react props.
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);