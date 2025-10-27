import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import View from './View';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import Sidebar from './Sidebar';
import { useIntl } from 'react-intl';
import Image from '@plone/volto/components/theme/Image/Image';
import { defineMessages } from 'react-intl';
import TeaserTemplateImg from './teaser-template.svg';
import { Button } from '@plone/components';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import navTreeSVG from '@plone/volto/icons/nav.svg';
import { v4 as uuid } from 'uuid';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
  source: {
    id: 'Source',
    defaultMessage: 'Source',
  },
});

const SliderEdit = (props) => {
  const { onChangeBlock, openObjectBrowser, block, selected, data } = props;
  const intl = useIntl();
  const [slideIndex, setSlideIndex] = React.useState(0);

  const handleClick = () => {
    if (data.slides?.length === 0 || !data.slides) {
      data.slides = [
        {
          '@id': uuid(),
        },
      ];
    }
    openObjectBrowser({
      onSelectItem: (url, document) => {
        data.slides[0].title = document.Title;
        data.slides[0].description = document.Description;
        data.slides[0].href = [
          {
            '@id': document['@id'],
            Title: document.Title,
            Description: document.Description,
            title: document.Title,
            image_field: document.image_field,
            hasPreviewImage: document.hasPreviewImage,
          },
        ];
        onChangeBlock(block, data);
      },
      mode: 'link',
    });
  };

  return (
    <>
      {(data.slides?.length === 0 || !data.slides) && (
        <div className="slider-default-placeholder">
          <Image src={TeaserTemplateImg} alt="" />
          <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
          <Button onPress={handleClick}>
            <Icon name={navTreeSVG} size="24px" />
            {intl.formatMessage(messages.source)}
          </Button>
        </div>
      )}
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
