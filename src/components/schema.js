import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';
import { mergeSchemas } from '../helpers';
import { v4 as uuid } from 'uuid';

const messages = defineMessages({
  Source: {
    id: 'Source',
    defaultMessage: 'Source',
  },
  Slider: {
    id: 'Slider',
    defaultMessage: 'Slider',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  imageOverride: {
    id: 'Image override',
    defaultMessage: 'Image override',
  },
  item: {
    id: 'Item',
    defaultMessage: 'Item',
  },
  items: {
    id: 'Items',
    defaultMessage: 'Items',
  },
  addItem: {
    id: 'Add item',
    defaultMessage: 'Add item',
  },
  head_title: {
    id: 'Headtitle',
    defaultMessage: 'Headtitle',
  },
});

export const itemSchema = (props) =>
  mergeSchemas(
    {
      title: props.intl.formatMessage(messages.item),
      addMessage: props.intl.formatMessage(messages.addItem),
      fieldsets: [
        {
          id: 'default',
          title: 'Default',
          fields: [
            'href',
            'head_title',
            'title',
            'description',
            'preview_image',
          ],
        },
      ],

      properties: {
        href: {
          title: props.intl.formatMessage(messages.Source),
          widget: 'object_browser',
          mode: 'link',
          selectedItemAttrs: [
            'Title',
            'Description',
            'hasPreviewImage',
            'head_title',
          ],
          allowExternals: true,
        },
        head_title: {
          title: props.intl.formatMessage(messages.head_title),
        },
        title: {
          title: props.intl.formatMessage(messages.title),
        },
        description: {
          title: props.intl.formatMessage(messages.description),
        },
        preview_image: {
          title: props.intl.formatMessage(messages.imageOverride),
          widget: 'object_browser',
          mode: 'image',
          allowExternals: true,
        },
      },
      required: [],
    },
    config.blocks.blocksConfig.slider.extensions?.slideSchema || {},
  );

export const SliderSchema = (props) =>
  mergeSchemas(
    {
      title: props.intl.formatMessage(messages.Slider),
      block: 'slider',
      fieldsets: [
        {
          id: 'default',
          title: 'Default',
          fields: ['slides'],
        },
      ],
      properties: {
        slides: {
          widget: 'object_list',
          title: props.intl.formatMessage(messages.items),
          schema: itemSchema(props),
          activeObject: props.activeObject,
          setActiveObject: props.setActiveObject,
          default: [{ '@id': uuid() }],
        },
      },
      required: [],
    },
    config.blocks.blocksConfig.slider.extensions?.blockSchema || {},
  );
