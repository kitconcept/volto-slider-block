import { describe, it, expect, vi } from 'vitest';
import { SliderBlockDataAdapter } from './adapter';

describe('SliderBlockDataAdapter', () => {
  it('calls onChangeBlock with the merged data', () => {
    const onChangeBlock = vi.fn();
    const data = { '@type': 'slider', slides: [], title: 'Slides' };

    SliderBlockDataAdapter({
      block: 'block-1',
      data,
      id: 'autoplayEnabled',
      onChangeBlock,
      value: true,
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'slider',
      slides: [],
      title: 'Slides',
      autoplayEnabled: true,
    });
  });
});
