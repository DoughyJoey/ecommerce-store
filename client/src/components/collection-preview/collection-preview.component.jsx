import React from 'react';
import { withRouter } from 'react-router-dom';
// components
import CollectionItem from '../collection-item/collection-item.component';

// collection styling
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

// previews first 4 items for each shop category
export const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName
}) => (
  // title becomes a link to specified category
  // uppercases the title
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    {/* only displays first 4 items */}
    {/* idx is the index */}
    {/* passes in the collection item */}
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (  
          // passes the entire item in
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);