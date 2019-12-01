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
          imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 1,
          linkUrl: 'security'
        },
        {
          title: 'Lighting',
          imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Thermostat',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/QubyDisplay_Home_withbackground.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Speaker',
          imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Vacuum',
          imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
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