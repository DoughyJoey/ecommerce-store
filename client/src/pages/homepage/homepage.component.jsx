import React, { Profiler } from 'react';

// components
import Directory from '../../components/directory/directory.component';

// styles
import { HomePageContainer } from './homepage.styles';

// functional component calls directory component
const HomePage = () => (
  <HomePageContainer>
    {/* Profiler used to test performance */}
    <Profiler 
      id="Directory" 
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration
          });
        }}>
      {/* renders directory component */}
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;