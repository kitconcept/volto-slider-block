# Volto Slider Block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-slider-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-slider-block)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Slider Block allows editors to add sliders to a Volto page. You can see it in action under [www.dlr.de](https://www.dlr.de/de) and [www.fz-juelich.de](https://www.fz-juelich.de/de).

## Screenshot

<img width="1375" alt="image" src="https://user-images.githubusercontent.com/486927/170819511-11b0012b-c3ab-4578-b110-85d51e6103ac.png">

## Screencast

https://user-images.githubusercontent.com/486927/170819371-6284d8e7-e5df-4893-9dab-cd06b1054505.mov

## Volto Compatibility

These are the recommended versions:

| Version | Volto version |
| ------- | ------------- |
| >=5.0.0 | >=17.0.0-alpha.27 |
| >=3.0.0 | >=16.0.0-rc.2 |
| <=2.1.0 | <=16.0.0-a50  |

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-slider-block
cd my-volto-project
```

Add `@kitconcept-volto/slider-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-slider-block"
],

"dependencies": {
    "@kitconcept/volto-slider-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The slider block will show up in the Volto blocks chooser.

## Customization

You can use a Volto `schemaEnhancer` to modify the existing block schema. The block also can be extended using Volto's block variations.

```
import { defineMessages } from 'react-intl';
import { pull } from 'lodash';

import SliderDefaultBody from './components/Blocks/Slider/DefaultBody'; // My custom view component for slides

const messages = defineMessages({
  color: {
    id: 'Color',
    defaultMessage: 'Color',
  },
  slideBackgroundColor: {
    id: 'Slide Background Color',
    defaultMessage: 'Slide Background Color',
  },
  flagColor: {
    id: 'Flag color',
    defaultMessage: 'Flag color',
  },
});

const BG_COLORS = [
  { name: 'transparent', label: 'Transparent' },
  { name: 'grey', label: 'Grey' },
];

// The schemaEnhancer
const sliderBlockSchemaEnhancer = ({ formData, schema, intl }) => {
  schema.properties.slides.schema.fieldsets[0].fields.push(
    'slideBackgroundColor',
  );
  schema.properties.slides.schema.properties.slideBackgroundColor = {
    widget: 'color_picker',
    title: intl.formatMessage(messages.slideBackgroundColor),
    colors: BG_COLORS,
    default: 'transparent',
  };
  pull(schema.properties.slides.schema.fieldsets[0].fields, 'description'); // You can remove fields as well
  return schema; // You should return the schema back
};

const applyConfig = (config) => {

  config.blocks.blocksConfig.slider = {
    schemaEnhancer: sliderBlockSchemaEnhancer,
    variations: [
      {
        id: 'default',
        isDefault: true,
        title: 'Default',
        view: SliderDefaultBody,
      },
    ],
  }
```

## Extra Customization

More fields can be added to either the block itself or to each slide. You can use the configuration settings to do so:

```
config.blocks.blocksConfig.slider.extensions = {
  blockSchema: {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['new_field'],
      },
    ],
    properties: {
      new_field: {
        title: 'New Slider Field',
      },
    },
  },
  slideSchema: {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['new_field'],
      },
    ],
    properties: {
      new_field: {
        title: 'New Slide Field',
      },
    },
  },
};
```

The block and slide schemas will be merged with the existing ones.

## Data adapter

The Teaser has a data adapter function that allows you to both tap into the changes in the settings and issue changes in other settings fields.
This is valuable in the Teaser block because it saves an internal cache of the target element.
If you select the target, these values are updated.
When you update the target, by default these values remain, but you can issue another behavior.

The data adapter function is defined in the block's setting `dataAdapter`.
You can override it and add your own function, if required.
The following is the default adapter.
You should stick to this signature in your custom adapters.

```js
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
```

## Fix for the limitation in `react-slick`

The underlying library used in this add-on is `react-slick`. This library has a limitation when used in the Volto Blocks Engine that prevents to enclose properly the slides in the block wrapper.

To workaround it, it's required to anchor the width to an external element that has the same desired size than the block wrapper. This is set to the default Volto header using a CSS selector ('.container .header') which is the most common use case and can be overriden using the block setting: `referenceContainerQuery` like:

```js
config.blocks.blocksConfig.slider = {
  referenceContainerQuery: '.container .header',
};
```

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-slider-block/raw/master/fz-juelich.svg" width="200px" />

<img alt="Deutsches Zentrum für Luft- und Raumfahrt" src="https://github.com/kitconcept/volto-slider-block/raw/master/dlr.svg" width="230px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de) and the [German Aerospace Center (DLR)](https://dlr.de).

# License

The project is licensed under the MIT license.
