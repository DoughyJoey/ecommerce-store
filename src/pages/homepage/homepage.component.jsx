import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

// functional component
// points to directory class
const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;