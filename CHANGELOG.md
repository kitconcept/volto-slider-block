# Change Log

## 3.0.0 (2022-11-20)

### Breaking

- Compatibility with Volto 16 RC2 onwards. The defaults now are handled by Volto itself, not the add-on code. @sneridagh

## 2.1.0 (2022-09-26)

### Feature

- `react-slick` enables dragging in desktop as well by default, although might be handy in some situations, disable dragging for desktop devices seems the most appropiate to prevent links activations on desktop drag @ThomasKindermann

## 2.0.0 (2022-07-28)

### Breaking

- Fix ally for slider (header level). So the inner heading changed from `h3` to `h2`. Update your CSS if required. @sneridagh

### Feature

- Use `aspect-ratio` CSS property in the slider images @sneridagh
- `@slider-images-aspect-ratio` `@slider-images-object-position` CSS properties are available for fine tuning customization @sneridagh

## 1.2.1 (2022-06-02)

### Bugfix

- Fix empty slide @sneridagh

### Internal

- Rename the internal component name to one more descriptive @sneridagh

## 1.2.0 (2022-05-30)

### Feature

- Sync the sidebar widget with the current slide state @sneridagh

### Internal

- New internal `slider_object_list` widget that takes care of the sync with the current slide in edit mode @sneridagh

## 1.1.2 (2022-05-28)

### Internal

- Remove yet another video from npm package @sneridagh

## 1.1.1 (2022-05-28)

### Internal

- Remove screenshot and video from npm package @sneridagh

## 1.1.0 (2022-05-28)

### Feature

- Add extension support @sneridagh
- Allow body component to be extended via variations @sneridagh
- Add default variation @sneridagh

### Bugfix

- Fix display bug in big screens @sneridagh
- Fix internal slide schema to allow extension @sneridagh

## 1.0.0 (2022-04-25)

### Feature

- Initial release @sneridagh @tisto
- Change Screencast Gif for README @kindermann

### Internal

- Added github workflows @robgietema
