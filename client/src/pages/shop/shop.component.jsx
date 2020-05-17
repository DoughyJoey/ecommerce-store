import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
//components
import Spinner from '../../components/spinner/spinner.component';
// styles
import { ShopPageContainer } from './shop.styles';

// lazy loads collections-overview.container to optimise performance
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

// lazy loads collection.container to optimise performance
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

// calls the fetchCollectionsStart action
export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      {/* loading spinner */}
      <Suspense fallback={<Spinner />}>
        {/* renders the collection overview container and collection page container */}
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        {/* path to specific collection category pages */}
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

// brings in the fetchCollectionsStart action from redux
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);