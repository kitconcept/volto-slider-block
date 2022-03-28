import React from 'react';
import View from './View';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';

const Edit = (props) => {
  const { data, onChangeBlock, block, selected } = props;

  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <Sidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
