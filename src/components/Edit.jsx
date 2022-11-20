import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import View from './View';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';

export const SliderContext = React.createContext({
  slideIndex: 0,
  setSlideIndex: () => {},
});

const SliderEdit = (props) => {
  const { onChangeBlock, block, selected, data } = props;

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

export default withBlockExtensions(SliderEdit);
