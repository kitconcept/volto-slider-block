import { describe, it, expect, vi } from 'vitest';
import applyConfig from './index';

// The block config pulls in the whole Volto app, which this test doesn't
// need: it only checks the registered style field definition.
vi.mock('./components', () => {
  const SLIDER_COLORS = [
    { name: 'slider-custom-color-1', label: 'Default', style: {} },
  ];
  return {
    default: { id: 'slider', flagColors: SLIDER_COLORS },
    SLIDER_COLORS,
  };
});

const makeConfig = () => {
  const utilities: Record<string, any> = {};
  const config: any = {
    blocks: { blocksConfig: {} },
    registerUtility: vi.fn(({ name, type, method }) => {
      utilities[`${type}:${name}`] = method;
    }),
  };
  applyConfig(config);
  return { config, utilities };
};

describe('flagColor style field definition', () => {
  it('returns the colors of the block config', () => {
    const { config, utilities } = makeConfig();
    const method = utilities['styleFieldDefinition:flagColor'];
    expect(method({ data: {}, container: {} })).toBe(
      config.blocks.blocksConfig.slider.flagColors,
    );
  });

  it('follows changes to the block config after startup', () => {
    const { config, utilities } = makeConfig();
    const colors = [{ name: 'dlr-blue', label: 'DLR blue', style: {} }];
    config.blocks.blocksConfig = {
      ...config.blocks.blocksConfig,
      slider: {
        ...config.blocks.blocksConfig.slider,
        flagColors: colors,
      },
    };
    const method = utilities['styleFieldDefinition:flagColor'];
    expect(method({ data: {}, container: {} })).toBe(colors);
  });
});
