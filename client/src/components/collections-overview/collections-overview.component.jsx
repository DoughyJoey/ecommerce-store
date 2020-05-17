import React from 'react';
import { connect } from 'react-redux';
// selectors
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
// component
import CollectionPreview from '../collection-preview/collection-preview.component';

// styling
import { CollectionsOverviewContainer } from './collections-overview.styles';

// passes in the collections we get from redux selector
export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
  {/* iterates over the collections and renders the CollectionPreview */}
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

// brings in our collection from the shop selector
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);