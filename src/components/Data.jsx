import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components';
import { difference } from '@plone/volto/helpers';
import { usePrevious /* , replaceItemOfArray */ } from '@plone/volto/helpers';

import { SliderSchema } from './schema';

export const replaceItemOfArray = (array, index, value) =>
  Object.assign([...array], { [index]: value });

const SliderData = (props) => {
  const { block, data, onChangeBlock } = props;
  const intl = useIntl();
  const { slides } = props.data;
  const previous = usePrevious(slides);
  const schema = SliderSchema({ ...props, intl });

  React.useEffect(() => {
    if (previous) {
      const diff = difference(slides, previous);
      const index = diff.findIndex((val) => val);
      if (diff[index]?.href?.[0]) {
        onChangeBlock(block, {
          ...data,
          slides: replaceItemOfArray(data.slides, index, {
            ...data.slides[index],
            title: diff[index].href[0].title,
            description: diff[index].href[0].Description,
            head_title: diff[index].href[0].head_title,
          }),
        });
      }
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [slides]);

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
    />
  );
};

SliderData.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default SliderData;
