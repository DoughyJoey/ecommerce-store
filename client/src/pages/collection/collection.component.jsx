import React from 'react';
import { connect } from 'react-redux';

// components
import CollectionItem from '../../components/collection-item/collection-item.component';

// selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

// collection styling
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

// passes in the collection
export const CollectionPage = ({ collection }) => {
  // destructures of the title and items from collection
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
    {/* renders the title */}
      <CollectionTitle>{title}</CollectionTitle>
      {/* iterates over the collection items */}
      {/* passes props and renders collection item component */}
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

// gets the gets a specific category page
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);