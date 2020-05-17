import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// compose used to wrap components
import { compose } from 'redux';
//selectors
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
//components
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

// gets selectIsCollectionFetching from shop selectors to check if page is loading
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// chains functions
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;