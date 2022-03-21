import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { getTeaserImageURL } from '../helpers';
import { flattenToAppURL } from '@plone/volto/helpers';
import { MaybeWrap, UniversalLink } from '@plone/volto/components';
import teaserHeroTopTemplate from '../icons/teaser-template.svg';
import { Message } from 'semantic-ui-react';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
  moreInfo: {
    id: 'moreInfo',
    defaultMessage: 'More info',
  },
});

const SliderBody = (props) => {
  const { data, isEditMode } = props;
  const href = data.href?.[0];
  const image = data.preview_image?.[0];

  return (
    <div className="grid-teaser-item top">
      {!href && isEditMode && (
        <Message>
          <div className="grid-teaser-item default">
            <img src={teaserHeroTopTemplate} alt="" />
            <p>{props.intl.formatMessage(messages.PleaseChooseContent)}</p>
          </div>
        </Message>
      )}
      {href && (
        <div className="teaser-item top">
          <MaybeWrap
            condition={!isEditMode}
            as={UniversalLink}
            href={href['@id']}
            target={data.openLinkInNewTab ? '_blank' : null}
            tabIndex="-1"
          >
            {(href?.hasPreviewImage || image) && (
              <div className="highlight-image-wrapper gradient">
                <img
                  src={flattenToAppURL(getTeaserImageURL(href, image, 'great'))}
                  alt=""
                  loading="lazy"
                />
              </div>
            )}
            <div className="teaser-item-title fix-width-issue">
              <div className="title">
                {data?.head_title && (
                  <span className="supertitle">{data?.head_title}</span>
                )}
                <h3>{data?.nav_title || data?.title}</h3>
              </div>
              <p>{data?.description}</p>
            </div>
          </MaybeWrap>
        </div>
      )}
    </div>
  );
};

export default injectIntl(SliderBody);
