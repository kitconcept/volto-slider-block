import Edit from './Edit';
import View from './View';
import sliderSVG from '@plone/volto/icons/slider.svg';
import { SliderBlockDataAdapter } from './adapter';
import Simple from '../variants/Simple';
import DefaultBody from './DefaultBody';
import { SliderSchema } from './schema';
import type { BlockConfigBase } from '@plone/types';

const blockConfig: BlockConfigBase = {
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
  blockSchema: SliderSchema,
  variations: [
    {
      id: 'default',
      title: 'Default',
      isDefault: true,
      view: DefaultBody,
    },
    {
      id: 'simple',
      title: 'Simple',
      view: Simple,
    },
  ],
};

export default blockConfig;
