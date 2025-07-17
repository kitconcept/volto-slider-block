import Icon from '@plone/volto/components/theme/Icon/Icon';
import { useIntl, defineMessages } from 'react-intl';
import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import leftArrowSVG from '@plone/volto/icons/left-key.svg';

const messages = defineMessages({
  previousButton: {
    id: 'Previous slide',
    defaultMessage: 'Previous slide',
  },
  nextButton: {
    id: 'Next slide',
    defaultMessage: 'Next slide',
  },
  goToSlide: {
    id: 'Go to slide',
    defaultMessage: 'Go to slide',
  },
});

export const DotButton = (props) => {
  const { children, index, ...restProps } = props;
  const intl = useIntl();

  return (
    <button
      type="button"
      {...restProps}
      aria-label={`${intl.formatMessage(messages.goToSlide)} ${index + 1}`}
    >
      {children}
    </button>
  );
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;
  const intl = useIntl();

  return (
    <button
      className="slider-button slider-button-prev"
      type="button"
      aria-label={intl.formatMessage(messages.previousButton)}
      {...restProps}
    >
      <Icon name={leftArrowSVG} size="48px" />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;
  const intl = useIntl();

  return (
    <button
      className="slider-button slider-button-next"
      type="button"
      aria-label={intl.formatMessage(messages.nextButton)}
      {...restProps}
    >
      <Icon name={rightArrowSVG} size="48px" />
      {children}
    </button>
  );
};
