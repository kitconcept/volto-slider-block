import { difference } from '@plone/volto/helpers';
import { replaceItemOfArray } from '@plone/volto/helpers';

export const SliderBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}) => {
  let dataSaved = {
    ...data,
    [id]: value,
  };

  if (id === 'slides') {
    const diff = difference(value, data[id]);
    const index = diff.findIndex((val) => val);
    if (diff[index]?.href?.[0]) {
      dataSaved = {
        ...dataSaved,
        slides: replaceItemOfArray(value, index, {
          ...value[index],
          title: diff[index].href[0].Title,
          description: diff[index].href[0].Description,
          head_title: diff[index].href[0].head_title,
        }),
      };
    }
  }

  onChangeBlock(block, dataSaved);
};
