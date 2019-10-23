import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'security',
          imageUrl: 'https://images.unsplash.com/photo-1527893376446-318ed279c3a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1389&q=80',
          id: 1,
          linkUrl: 'security'
        },
        {
          title: 'thermostats',
          imageUrl: 'https://storage.needpix.com/rsynced_images/round-2585483_1280.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'vacuums',
          imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'lighting',
          imageUrl: 'https://live.staticflickr.com/2438/3881682653_ed5ac1f2a2_b.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'speakers',
          imageUrl: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          size: 'large',
          id: 5,
          linkUrl: ''
        },
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;