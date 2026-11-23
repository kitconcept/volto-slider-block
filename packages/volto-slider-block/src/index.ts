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
    /**
     * Keys that the blocks configuration of kitconcept-core may replace
     * through the web, and the type of their value. Must stay identical to
     * the declaration in kitconcept-core.
     */
    ttwConfigurable?: Record<string, string>;
  }
}

const applyConfig = (config: ConfigType) => {
  config.blocks.blocksConfig.slider = blockConfig;

  config.registerUtility({
    name: 'flagColor',
    type: 'styleFieldDefinition',
    // Read the colors from the block config at render time, so changes to it
    // after startup (for example, through the web) are applied to the page too.
    method: (props: { data: any; container: any }) =>
      config.blocks.blocksConfig.slider?.flagColors || SLIDER_COLORS,
  });

  return config;
};

export default applyConfig;
