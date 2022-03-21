import React from 'react';
import { Segment } from 'semantic-ui-react';

import SliderData from './SliderData';

const SliderSidebar = (props) => {
  return (
    <Segment.Group raised>
      <SliderData {...props} />
    </Segment.Group>
  );
};

export default SliderSidebar;
