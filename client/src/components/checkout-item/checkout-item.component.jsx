import React from 'react';
import { connect } from 'react-redux';

// cart actions
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

// checkout-item styling
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

// takes a cartItem and actions defined within our cart actions
export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  // destructures off the following props from cart item
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      {/* displays the item image */}
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      {/* displays the item name */}
      <TextContainer>{name}</TextContainer>
      {/* displays quantity and add / remove arrows */}
      {/* uses removeItem and addItem from cart actions */}
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      {/* displays the price */}
      <TextContainer>{price}</TextContainer>
      {/* provides an X to clear item */}
      {/* uses clearItem cart action */}
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

// brings in cart actions from redux
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);