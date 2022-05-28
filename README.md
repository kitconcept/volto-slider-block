# Volto Slider Block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-slider-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-slider-block)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)
[![Build Status](https://github.com/kitconcept/volto-slider-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-slider-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Slider Block allows editors to add sliders to a Volto page.

## Screenshot

<img width="1375" alt="image" src="https://user-images.githubusercontent.com/486927/170819511-11b0012b-c3ab-4578-b110-85d51e6103ac.png">

## Screencast

https://user-images.githubusercontent.com/486927/170819371-6284d8e7-e5df-4893-9dab-cd06b1054505.mov


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
