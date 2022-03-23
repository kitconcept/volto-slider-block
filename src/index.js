import Edit from './components/Edit';
import View from './components/View';
import sliderSVG from '@plone/volto/icons/slider.svg';

const applyConfig = (config) => {
  config.blocks.blocksConfig.slider = {
    id: 'slider',
    title: 'Portal Slider',
    group: 'common',
    icon: sliderSVG,
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    extensions: {
      blockSchema: {
        fieldsets: [
          {
            id: 'default',
            title: 'Default',
            fields: ['new_field'],
          },
        ],
        properties: {
          new_field: {
            title: 'New Slider Field',
          },
        },
      },
      slideSchema: {
        fieldsets: [
          {
            id: 'default',
            title: 'Default',
            fields: ['new_field'],
          },
        ],
        properties: {
          new_field: {
            title: 'New Slide Field',
          },
        },
      },
    },
  };
  return config;
};

export default applyConfig;
