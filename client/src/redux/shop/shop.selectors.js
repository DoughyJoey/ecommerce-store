import { createSelector } from 'reselect';

// set selectShop to shop state
const selectShop = state => state.shop;

// gets all the shop collections
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// gets the collections for a certain category
// preview for the shop page
// if the collections exist, call the object keys
// else, return an empty array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// gets the collection at a specific URL
// if the collections exist, return the collect
// else, returns null
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

// checks if the collection is being fetched
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

// checks if the collections are loaded
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);