import React from 'react';
import View from './View';
import { SidebarPortal } from '@plone/volto/components';
import SliderSidebar from './SliderSidebar';

const Edit = (props) => {
  const { data, onChangeBlock, block, selected } = props;

  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <SliderSidebar
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
