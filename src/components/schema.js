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
  Autoplay: {
    id: 'Autoplay',
    defaultMessage: 'Autoplay',
  },
  AutoplayEnabled: {
    id: 'Enable Autoplay?',
    defaultMessage: 'Enable Autoplay?',
  },
  AutoplayDelay: {
    id: 'Delay between transitions (milliseconds)',
    defaultMessage: 'Delay between transitions (milliseconds)',
  },
  AutoplayJump: {
    id: 'Do instant slide transitions?',
    defaultMessage: 'Do instant slide transitions?',
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
          title: props.intl.formatMessage(messages.head_title),
        },
        title: {
          title: props.intl.formatMessage(messages.title),
        },
        description: {
          title: props.intl.formatMessage(messages.description),
          widget: 'textarea',
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
        ...(config.blocks.blocksConfig.slider.enableAutoPlay
          ? [
              {
                id: 'autoplay',
                title: props.intl.formatMessage(messages.Autoplay),
                fields: ['autoplayEnabled', 'autoplayDelay', 'autoplayJump'],
              },
            ]
          : []),
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
        autoplayEnabled: {
          title: props.intl.formatMessage(messages.AutoplayEnabled),
          default: false,
          type: 'boolean',
        },
        autoplayDelay: {
          title: props.intl.formatMessage(messages.AutoplayDelay),
          type: 'integer',
          default: 4000,
        },
        autoplayJump: {
          title: props.intl.formatMessage(messages.AutoplayJump),
          default: false,
          type: 'boolean',
        },
      },
      required: [],
    },
    config.blocks.blocksConfig.slider.extensions?.blockSchema || {},
  );
