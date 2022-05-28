import React from 'react';
import { Message } from 'semantic-ui-react';
import Slider from 'react-slick';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import Body from './Body';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Icon } from '@plone/volto/components';
import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import leftArrowSVG from '@plone/volto/icons/left-key.svg';
import teaserTemplate from '../icons/teaser-template.svg';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={leftArrowSVG} size="48px" />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={rightArrowSVG} size="48px" />
  </button>
);

const View = (props) => {
  const {
    className,
    data,
    isEditMode,
    block,
    openObjectBrowser,
    onChangeBlock,
  } = props;
  const intl = useIntl();

  return (
    <div className={cx('block slider', className)}>
      {(data.slides?.length === 0 || !data.slides) && isEditMode && (
        <Message>
          <div className="teaser-item default">
            <img src={teaserTemplate} alt="" />
            <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
          </div>
        </Message>
      )}
      {data.slides?.length > 0 && (
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          slideWidth="1200px"
        >
          {data.slides &&
            data.slides.map((item, index) => (
              <div>
                <Body
                  {...props}
                  key={item['@id']}
                  data={item}
                  isEditMode={isEditMode}
                  dataBlock={data}
                  index={index}
                  block={block}
                  openObjectBrowser={openObjectBrowser}
                  onChangeBlock={onChangeBlock}
                />
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
};

export default withBlockExtensions(View);
