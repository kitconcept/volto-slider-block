import Edit from './Edit';
import View from './View';
import sliderSVG from '@plone/volto/icons/slider.svg';
import { SliderBlockDataAdapter } from './adapter';
import Simple from '../variants/Simple';
import DefaultBody from './DefaultBody';
import { SliderSchema } from './schema';
import type { BlockConfigBase } from '@plone/types';

export const SLIDER_COLORS = [
  {
    name: 'slider-custom-color-1',
    label: 'White',
    style: {
      '--flagColor': '#fff',
      '--flagColor-foreground': '#000',
    },
  },
  {
    name: 'slider-custom-color-2',
    label: 'Teal',
    style: {
      '--flagColor': '#306F7E',
      '--flagColor-foreground': '#fff',
    },
  },
  {
    name: 'slider-custom-color-3',
    label: 'Sky Blue',
    style: {
      '--flagColor': '#91C9FA',
      '--flagColor-foreground': '#000',
    },
  },
  {
    name: 'slider-custom-color-4',
    label: 'Indigo',
    style: {
      '--flagColor': '#4B4BB8',
      '--flagColor-foreground': '#fff',
    },
  },
  {
    name: 'slider-custom-color-5',
    label: 'Peach',
    style: {
      '--flagColor': '#F5C1A9',
      '--flagColor-foreground': '#000',
    },
  },
  {
    name: 'slider-custom-color-6',
    label: 'Yellow',
    style: {
      '--flagColor': '#EEE38D',
      '--flagColor-foreground': '#000',
    },
  },
  {
    name: 'slider-custom-color-7',
    label: 'Black',
    style: {
      '--flagColor': '#000',
      '--flagColor-foreground': '#fff',
    },
  },
  {
    name: 'slider-custom-color-8',
    label: 'Grey',
    style: {
      '--flagColor': '#ECEBEB',
      '--flagColor-foreground': '#000',
    },
  },
];

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
  flagColors: SLIDER_COLORS,
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
