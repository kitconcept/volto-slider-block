import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import View from './View';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import Sidebar from './Sidebar';

const SliderEdit = (props) => {
  const { onChangeBlock, block, selected, data } = props;

  const [slideIndex, setSlideIndex] = React.useState(0);

  return (
    <>
      <View
        {...props}
        isEditMode
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <SidebarPortal selected={selected}>
        <Sidebar
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          activeObject={slideIndex}
          setActiveObject={setSlideIndex}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(SliderEdit);
