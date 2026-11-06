import { describe, it, expect, beforeAll } from 'vitest';
import { createIntl } from 'react-intl';
import config from '@plone/volto/registry';
import { SliderSchema } from './schema';

const intl = createIntl({ locale: 'en', messages: {}, onError: () => {} });

describe('SliderSchema', () => {
  beforeAll(() => {
    config.blocks.blocksConfig.slider = {
      id: 'slider',
      enableAutoPlay: true,
      flagColors: [
        {
          name: 'slider-custom-color-1',
          label: 'White',
          style: { '--flagColor': '#fff' },
        },
      ],
    };
  });

  it('resolves with the arguments the @blocks-schema endpoint passes', () => {
    const data = { '@type': 'slider' };
    const schema = SliderSchema({ data, intl, props: { data } });

    expect(schema.title).toBe('Slider');
    expect(schema.properties.slides.widget).toBe('object_list');
    expect(schema.properties.styles.schema.properties.flagColor.widget).toBe(
      'color_picker',
    );
  });

  it('does not depend on editor-only props', () => {
    const schema = SliderSchema({ intl });

    expect(schema.properties.slides).not.toHaveProperty('activeObject');
    expect(schema.properties.slides).not.toHaveProperty('setActiveObject');
  });
});
