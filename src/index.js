import Edit from './components/Edit';
import View from './components/View';
import SliderObjectListWidget from './components/ObjectListWidget';
import sliderSVG from '@plone/volto/icons/slider.svg';
import './theme/main.less';

const applyConfig = (config) => {
  // This is a custom list widget that takes a context from
  // The main Edit component to control the current slide (element)
  // and syncs it with the current element in the object list.
  config.widgets.widget.slider_object_list = SliderObjectListWidget;

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
  };
  return config;
};

export default applyConfig;
