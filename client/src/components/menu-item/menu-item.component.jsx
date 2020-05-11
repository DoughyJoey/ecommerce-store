import React from 'react';
// withRouter gives access to history prop
import { withRouter } from 'react-router-dom';

// imports the styled components
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

// passes in the below properties 
export const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
  // sets the image size
  // on click directs user to the link url
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/* sets the background image to the image url */}
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    {/* content is the box within the image*/}
    {/* uppercases the title and displays the subtitle */}
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);