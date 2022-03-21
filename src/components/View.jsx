import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import Slider from 'react-slick';
import { defineMessages, useIntl } from 'react-intl';
import SliderBody from './SliderBody';
import leftArrowSVG from '../icons/slider-previous.svg';
import rightArrowSVG from '../icons/slider-next.svg';
import teaserTemplate from '../icons/teaser-template.svg';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

const PrevArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <img src={leftArrowSVG} width="24" height="24" alt="Previous" />
  </Button>
);

const NextArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <img src={rightArrowSVG} width="24" height="24" alt="Previous" />
  </Button>
);

const View = (props) => {
  const { data, isEditMode } = props;
  const intl = useIntl();

  return (
    <div className="full-width">
      <div className="block highlightSlider">
        {(data.slides?.length === 0 || !data.slides) && isEditMode && (
          <Message>
            <div className="teaser-item default">
              <img src={teaserTemplate} alt="" />
              <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
            </div>
          </Message>
        )}
        {data.slides?.length > 0 && (
          <div className="full-width">
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
            >
              {data.slides &&
                data.slides.map((item) => (
                  <SliderBody
                    key={item['@id']}
                    data={item}
                    isEditMode={isEditMode}
                  />
                ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
