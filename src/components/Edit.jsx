import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { v4 as uuid } from 'uuid';
import View from './View';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';

export const SliderContext = React.createContext({
  slideIndex: 0,
  setSlideIndex: () => {},
});

const Edit = (props) => {
  const { onChangeBlock, block, selected } = props;
  const data = {
    slides: [{ '@id': uuid() }],
    ...props.data,
  };
  if (!props.data.slides) {
    onChangeBlock(block, data);
  }
  const [slideIndex, setSlideIndex] = React.useState(0);

  const contextValue = React.useMemo(() => ({ slideIndex, setSlideIndex }), [
    slideIndex,
  ]);

  return (
    <SliderContext.Provider value={contextValue}>
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
        />
      </SidebarPortal>
    </SliderContext.Provider>
  );
};

export default withBlockExtensions(Edit);
