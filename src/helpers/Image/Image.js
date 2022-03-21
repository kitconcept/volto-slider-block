import { isInternalURL } from '@plone/volto/helpers';

export function getTeaserImageURL(href, image, scale = 'teaser') {
  if (image) {
    if (isInternalURL(image['@id'])) {
      return `${image['@id']}/@@images/image/${scale}`;
    } else {
      return image['@id'];
    }
  } else {
    return `${href['@id']}/@@images/preview_image/${scale}`;
  }
}
