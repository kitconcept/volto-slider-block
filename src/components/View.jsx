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
import { SlidesWidthFix, useNodeDimensions } from '../helpers';
import config from '@plone/volto/registry';

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
    aria-label="previous"
  >
    <Icon name={leftArrowSVG} size="48px" />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    aria-label="next"
  >
    <Icon name={rightArrowSVG} size="48px" />
  </button>
);

const SliderView = (props) => {
  const {
    className,
    data,
    isEditMode = false,
    block,
    openObjectBrowser,
    onChangeBlock,
    slideIndex,
    setSlideIndex,
  } = props;
  const intl = useIntl();

  // These are the local state in case of view mode
  // The ones that control the edit need to be above since they have
  // to be drilled down to here AND to the sidebar
  const [slideViewIndex, setSlideViewIndex] = React.useState(0);

  const sliderRef = React.useRef();

  if (sliderRef.current && isEditMode) {
    // This syncs the current slide with the objectwidget (or other sources
    // able to access the slider context)
    // that can modify the SliderContext (and come here via props slideIndex)
    sliderRef.current.slickGoTo(slideIndex);
  }

  const [headerNode, setHeaderNode] = React.useState(null);

  React.useEffect(() => {
    // Unfortunately, we need to go with this ugly hack above the
    // dimensions hack for make the slide width work in edit mode as
    // we want it.
    // The reason is behind how React Portals work and the timing
    // around when they are updated.
    // What happens is that when the edit route kicks in, this
    // component renders and checks for the size of the element slightly
    // before the Portal kicks in and renders itself, then the sidebar is
    // rendered with its dimensions and pushes the rest to its right position.
    // When this happens is late, and the dimensions have been calculated already
    // thus the dimensions are wrong (they are the ones before the portal kicks
    // is, so they are wider than expected).
    if (isEditMode) {
      setTimeout(() => {
        window.scroll(0, 1);
      }, 100);
    }
  }, [isEditMode]);

  React.useEffect(() => {
    setHeaderNode(
      document.querySelector(
        config.blocks.blocksConfig.slider.referenceContainerQuery,
      ),
    );
  }, []);
  const { width } = useNodeDimensions(headerNode);

  return (
    <>
      <SlidesWidthFix width={width} />
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
            ref={sliderRef}
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            draggable={false}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            slideWidth="1200px"
            // This syncs the current slide with the SliderContext state
            // responding to the slide change event from the slider itself
            // (the dots or the arrows)
            afterChange={(current) => isEditMode && setSlideIndex(current)}
            beforeChange={(current) => setSlideViewIndex(current)}
          >
            {data.slides &&
              data.slides.map((item, index) => {
                return (
                  <div key={item['@id']}>
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
                      isActive={slideViewIndex === index}
                    />
                  </div>
                );
              })}
          </Slider>
        )}
      </div>
    </>
  );
};

export default withBlockExtensions(SliderView);
