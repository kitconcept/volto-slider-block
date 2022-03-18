# Volto Slider Block <img src="https://raw.githubusercontent.com/plone/pastanaga-icons/master/Icons/divide-horizontal.svg">

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-slider-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-slider-block)
[![Build Status](https://github.com/kitconcept/volto-blocks-grid/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-blocks-grid/actions)
[![Build Status](https://github.com/kitconcept/volto-blocks-grid/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-blocks-grid/actions)
[![Build Status](https://github.com/kitconcept/volto-blocks-grid/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-blocks-grid/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Slider Block allows editors to add sliders to a Volto page.

## Screenshot

![slider-block_grey_left_gradient-green](https://user-images.githubusercontent.com/632105/158999025-3f7c0de3-6541-4b9e-9887-95e8c46e558e.jpg)


## Screencast

todo

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-slider-block
cd my-volto-project
```

Add `@kitconcept-volto-slider-block`to your package.json:

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

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
