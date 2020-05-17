import React from 'react';
import { connect } from 'react-redux';

// cart actions
import { addItem } from '../../redux/cart/cart.actions';

// collection item styling
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

// uses the addItem fucntiion from cart.actiion
export const CollectionItem = ({ item, addItem }) => {
  // destructures properties of the item
  const { name, price, imageUrl } = item;

  // renders the menu item
  // onClick buttion enables users to add items to their cart
  return (
    <CollectionItemContainer>
    {/* displays the relevant image */}
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
      {/* displays relevant name */}
        <NameContainer>{name}</NameContainer>
      {/* displays relevant price */}
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      {/* uses addItem action from cart action */}
      {/* displays inverted custom button styling */}
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

// brings addItem action into component from redux
// can be found in cart actions
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);