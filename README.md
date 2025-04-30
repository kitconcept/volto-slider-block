# Volto Slider Block (@kitconcept/volto-slider-block)

A slider block for volto

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-slider-block)](https://www.npmjs.com/package/@kitconcept/volto-slider-block)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-slider-block/)
[![Code analysis checks](https://github.com/kitconcept/volto-slider-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions/workflows/code.yml)
[![Unit tests](https://github.com/kitconcept/volto-slider-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions/workflows/unit.yml)


<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://kitconcept.com/kitconcept-white.svg">
  <img width="300" alt="kitconcept, GmbH" src="https://kitconcept.com/kitconcept-black.svg">
</picture>

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

## Features

<!-- List your awesome features here -->

## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-slider-block
cd my-volto-project
```

Add `@kitconcept/volto-slider-block` to your package.json:

```JSON
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

Start volto with:

```
yarn start
```

### Volto 18 and later

Add `@kitconcept/volto-slider-block` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-slider-block": "*"
}
```

Add `@kitconcept/volto-slider-block` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-slider-block'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = '@kitconcept/volto-slider-block';
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.

## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)

## Configuration options

### `enableAutoPlay`

This enables the autoplay controls in the block's settings.

```js
config.blocks.blocksConfig.slider.enableAutoPlay = true;
```

## Upgrade Guide

### `volto-slider-block` 6.0.0

The underlying library used by this block has been changed.
Now it uses [Embla Caroussel](https://www.embla-carousel.com).
Embla Caroussel has a similar API and has all the features that `react-slick` had.
Embla is more modern and supported, uses hooks to configure itself and it's extensible using plugins.
It solves all the problems that `react-slick` had, specially in the simplification of the containers and wrappers, and the way it handles the CSS transformations and the width of the elements.

If you've made any CSS customization, the classNames changed, so you'll need to update the CSS following this table.

| Old className   | New className    |
| --------------- | ---------------- |
| slick-slider    | slider-wrapper   |
| slick-list      | slider-viewport  |
| slick-track     | slider-container |
| slick-slide     | slider-slide     |
| slick-arrow     | slider-button    |
| slick-prev      | slider-button-prev |
| slick-next      | slider-slide-next  |
| slick-next      | slider-slide-next  |
| slick-dots      | slider-dots      |
| slick-dot       | slider-dot       |

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

### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

Crafted with care by **Generated using [Cookieplone (0.8.2)](https://github.com/plone/cookieplone) and [cookiecutter-plone (d9b5293)](https://github.com/plone/cookiecutter-plone/commit/d9b52933cbc6efd137e93e35a270214e307359f0) on 2025-01-15 17:14:53.439229**. A special thanks to all contributors and supporters!

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-slider-block/raw/main/fz-juelich.svg" width="200px" />

<img alt="Deutsches Zentrum für Luft- und Raumfahrt" src="https://github.com/kitconcept/volto-slider-block/raw/main/dlr.svg" width="230px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de) and the [German Aerospace Center (DLR)](https://dlr.de).

# License

The project is licensed under the MIT license.
