import blockConfig, { SLIDER_COLORS } from './components';
import type { ConfigType } from '@plone/registry';

import './theme/slider-base.css';

declare module '@plone/types' {
  export interface BlocksConfigData {
    slider: BlockConfigBase;
  }
  export interface BlockConfigBase {
    enableAutoPlay?: boolean;
    flagColors?: Array<{
      name: string;
      label: string;
      style: Record<string, string>;
    }>;
  }
}

const applyConfig = (config: ConfigType) => {
  config.blocks.blocksConfig.slider = blockConfig;

  config.registerUtility({
    name: 'flagColor',
    type: 'styleFieldDefinition',
    method: (props: { data: any; container: any }) => SLIDER_COLORS,
  });

  return config;
};

export default applyConfig;
