import Edit from './components/Edit';
import View from './components/View';
import sliderSVG from '@plone/volto/icons/slider.svg';
import { SliderBlockDataAdapter } from './components/adapter';

import './theme/main.less';

const applyConfig = (config) => {
  config.blocks.blocksConfig.slider = {
    id: 'slider',
    title: 'Slider',
    group: 'common',
    icon: sliderSVG,
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    dataAdapter: SliderBlockDataAdapter,
    enableAutoPlay: false,
  };
  return config;
};

export default applyConfig;
