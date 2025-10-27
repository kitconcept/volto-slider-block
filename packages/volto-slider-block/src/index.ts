import blockConfig from './components';
import type { ConfigType } from '@plone/registry';

import './theme/slider-base.css';

declare module '@plone/types' {
  export interface BlocksConfigData {
    slider: BlockConfigBase;
  }
  export interface BlockConfigBase {
    enableAutoPlay?: boolean;
  }
}

const applyConfig = (config: ConfigType) => {
  config.blocks.blocksConfig.slider = blockConfig;

  return config;
};

export default applyConfig;
