import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';
import { mergeSchemas } from '../helpers';
import { v4 as uuid } from 'uuid';

const messages = defineMessages({
  Target: {
    id: 'Target',
    defaultMessage: 'Target',
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
  customImage: {
    id: 'Custom image',
    defaultMessage: 'Custom image',
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
  kicker: {
    id: 'Kicker',
    defaultMessage: 'Kicker',
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
          title: props.intl.formatMessage(messages.Target),
          widget: 'object_browser',
          mode: 'link',
          selectedItemAttrs: [
            'Title',
            'Description',
            'head_title',
            'hasPreviewImage',
            'image_field',
            'image_scales',
            '@type',
          ],
          allowExternals: true,
        },
        head_title: {
          title: props.intl.formatMessage(messages.kicker),
        },
        title: {
          title: props.intl.formatMessage(messages.title),
        },
        description: {
          title: props.intl.formatMessage(messages.description),
          widget: 'textarea',
        },
        preview_image: {
          title: props.intl.formatMessage(messages.customImage),
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
