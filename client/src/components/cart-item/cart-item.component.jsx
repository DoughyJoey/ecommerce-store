import React from 'react';

// cart item styling
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

// passes in the item with the required props
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    {/* displays the item image */}
    <CartItemImage src={imageUrl} alt='item' />
    {/* displays the item name, quantity and price */}
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);