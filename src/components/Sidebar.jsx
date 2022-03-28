import React from 'react';
import { Segment } from 'semantic-ui-react';

import Data from './Data';

const SliderSidebar = (props) => {
  return (
    <Segment.Group raised>
      <Data {...props} />
    </Segment.Group>
  );
};

export default SliderSidebar;
