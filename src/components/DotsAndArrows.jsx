import { Icon } from '@plone/volto/components';
import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import leftArrowSVG from '@plone/volto/icons/left-key.svg';

export const DotButton = (props) => {
  const { children, index, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      aria-label={`Go to slide ${index + 1}`}
    >
      {children}
    </button>
  );
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="slider-button slider-button-prev"
      type="button"
      aria-label="previous"
      {...restProps}
    >
      <Icon name={leftArrowSVG} size="48px" />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="slider-button slider-button-next"
      type="button"
      aria-label="next"
      {...restProps}
    >
      <Icon name={rightArrowSVG} size="48px" />
      {children}
    </button>
  );
};
