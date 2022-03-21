import { defineMessages } from 'react-intl';

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

const itemSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.item),
    addMessage: intl.formatMessage(messages.addItem),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['href', 'head_title', 'title', 'description', 'preview_image'],
      },
    ],

    properties: {
      href: {
        title: intl.formatMessage(messages.Source),
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
        title: intl.formatMessage(messages.head_title),
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      description: {
        title: intl.formatMessage(messages.description),
      },
      preview_image: {
        title: intl.formatMessage(messages.imageOverride),
        widget: 'object_browser',
        mode: 'image',
        allowExternals: true,
      },
    },
    required: [],
  };
};

export const SliderSchema = (props) => ({
  title: props.intl.formatMessage(messages.Slider),
  block: 'sliderNew',
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
      schema: itemSchema,
    },
  },
  required: [],
});
