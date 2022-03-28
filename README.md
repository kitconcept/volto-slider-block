# Volto Slider Block <img src="https://raw.githubusercontent.com/plone/pastanaga-icons/master/Icons/divide-horizontal.svg">

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-slider-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-slider-block)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Slider Block allows editors to add sliders to a Volto page.

## Screenshot

![Slider-Block](https://github.com/kitconcept/volto-slider-block/raw/master/screenshot.png)

## Screencast

![Slider-Block](https://github.com/kitconcept/volto-slider-block/raw/master/screencast.gif)

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

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
