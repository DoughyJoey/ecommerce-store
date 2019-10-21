import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

// directory with a state value of the menu items
// super pulls in react components needed for the class
class Directory extends React.Component {
  constructor() {
    super();

    // populates menu items
    // sections is used to describe the different menu sections on the homepage
    // sections is an array of objects
    this.state = {
      sections: [
        {
          title: 'home security',
          imageUrl: 'https://images.unsplash.com/photo-1549109926-58f039549485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 1
        },
        {
          title: 'lighting',
          imageUrl: 'https://live.staticflickr.com/2438/3881682653_ed5ac1f2a2_b.jpg',
          id: 2
        },
        {
          title: 'speaker',
          imageUrl: 'https://images.unsplash.com/photo-1562006101-8cb4476db274?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 3
        },
        {
          title: 'thermostat',
          imageUrl: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          size: 'large',
          id: 4
        },
        {
          title: 'vacuum',
          imageUrl: 'https://live.staticflickr.com/2289/5828181726_9ed5c5c97d_b.jpg',
          size: 'large',
          id: 5
        },
        {
          title: 'doorbell',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Ring_video_doorbell.jpg',
          size: 'large',
          id: 6
        },
        {
          title: 'tv',
          imageUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
          id: 7
        },
        {
          title: 'headphones',
          imageUrl: 'https://images.unsplash.com/photo-1565168316300-8685a0e25dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80',
          id: 8
        }
      ]
    };
  }

  // passess section objects into menu-item so they can be created
  // created objects are then rendered in the browser
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;