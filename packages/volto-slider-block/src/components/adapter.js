import {
  replaceItemOfArray,
  difference,
} from '@plone/volto/helpers/Utils/Utils.jsx';
import compact from 'lodash/compact';

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

  if (id === 'slides' && data[id]) {
    const diff = difference(value, data[id]);
    // If we are moving two items in the array, the changeset is > 1
    // then we do not do any sync
    const isReordering = compact(diff).length > 1;
    if (!isReordering) {
      const index = diff.findIndex((val) => val);
      if (diff[index]?.href?.[0]) {
        dataSaved = {
          ...dataSaved,
          slides: replaceItemOfArray(value, index, {
            ...value[index],
            // Conditionally overwrite the values only if they are not already overridden
            ...(!value[index].title && { title: diff[index].href[0].Title }),
            ...(!value[index].description && {
              description: diff[index].href[0].Description,
            }),
            ...(!value[index].head_title && {
              head_title: diff[index].href[0].head_title,
            }),
          }),
        };
      }
    }
  }

  onChangeBlock(block, dataSaved);
};
