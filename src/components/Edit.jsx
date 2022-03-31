import React from 'react';
import { v4 as uuid } from 'uuid';
import View from './View';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';

const Edit = (props) => {
  const { onChangeBlock, block, selected } = props;
  const data = {
    slides: [{ '@id': uuid() }],
    ...props.data,
  };
  if (!props.data.slides) {
    onChangeBlock(block, data);
  }

  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <Sidebar
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
