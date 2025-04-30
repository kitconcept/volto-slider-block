# kitconcept's volto-slider-block Release Notes

<!-- You should *NOT* be adding new change log entries to this file.
     You should create a file in the news directory instead.
     For helpful instructions, please see:
     https://6.dev-docs.plone.org/volto/developer-guidelines/contributing.html#create-a-pull-request
-->

<!-- towncrier release notes start -->

## 6.3.1 (2024-03-23)

### Internal

- Re-release with updated internal deps and peerDeps for Volto 18 @sneridagh [#0](https://github.com/kitconcept/volto-slider-block/pull/0)

## 6.3.0 (2024-03-07)

### Feature

- Enable autoPlay as opt-in. Documentation @sneridagh [#48](https://github.com/kitconcept/volto-slider-block/pull/48)

## 6.2.0 (2024-03-06)

### Feature

- Make navRoot and contentType props available to BlockDataForm @danalvrz [#43](https://github.com/kitconcept/volto-slider-block/pull/43)
- Add Brazilian Portuguese translations [@ericof] [#44](https://github.com/kitconcept/volto-slider-block/pull/44)
- Add Autoplay support to the slider block [@ericof] [#45](https://github.com/kitconcept/volto-slider-block/pull/45)

## 6.1.1 (2024-01-08)

### Bugfix

- Minor fix for German label translation, from Überschrift to Kopftitel @danalvrz [#41](https://github.com/kitconcept/volto-slider-block/pull/41)

## 6.1.0 (2023-12-22)

### Feature

- Add conditionals around arrow and dot buttons, and hide them, if there is only one slide @danalvrz [#40](https://github.com/kitconcept/volto-slider-block/pull/40)

## 6.0.0 (2023-12-18)

### Internal

- Release final @sneridagh [#39](https://github.com/kitconcept/volto-slider-block/pull/39)

## 6.0.0-alpha.1 (2023-12-15)

### Bugfix

- Fix a11y issues @sneridagh [#39](https://github.com/kitconcept/volto-slider-block/pull/39)

## 6.0.0-alpha.0 (2023-11-30)

### Breaking

- Change the underlying library from react-slick to embla-carousel-react @sneridagh
  See Upgrade Guide section in README [#37](https://github.com/kitconcept/volto-slider-block/pull/37)

## 5.2.1 (2023-11-27)

### Bugfix

- Renamed the German Translation of the Slider Block from "Schieberegler" into "Slider" @Molochem [#36](https://github.com/kitconcept/volto-slider-block/pull/36)

## 5.2.0 (2023-10-25)

### Feature

- Add Spanish translation @macagua [#25](https://github.com/kitconcept/volto-slider-block/pull/25)

### Bugfix

- Fix description field to use a textarea widget. @iFlameing [#31](https://github.com/kitconcept/volto-slider-block/pull/31)
- Fix a11y issues @ichim-david @sneridagh [#34](https://github.com/kitconcept/volto-slider-block/pull/34)


## 5.1.1 (2023-09-21)

### Bugfix

- Fix typo in variable name @sneridagh [#30](https://github.com/kitconcept/volto-slider-block/pull/30)


## 5.1.0 (2023-09-20)

### Feature

- Add adjustment option for the width of the slider container via CSS custom property. @sneridagh [#29](https://github.com/kitconcept/volto-slider-block/pull/29)


## 5.0.0 (2023-09-20)

### Breaking

- Added compatibility with the Volto 17 Image component @sneridagh
  If a external URL is provided, then the anchor is set to open in new window if `openExternalLinkInNewTab` from global settings is set @sneridagh [#28](https://github.com/kitconcept/volto-slider-block/pull/28)

### Feature

- Update docker environment @sneridagh [#23](https://github.com/kitconcept/volto-slider-block/pull/23)


## 4.3.0 (2023-04-20)

### Feature

- New docker based testing infrastructure @sneridagh [#20](https://github.com/kitconcept/volto-slider-block/pull/20)

### Bugfix

- Fix edge case in adapter when the object is null or undefined @sneridagh [#21](https://github.com/kitconcept/volto-slider-block/pull/21)


## 4.2.1 (2023-04-19)

### Bugfix

- Fix adapter now that the ObjectListWidget works well in Volto @sneridagh [#19](https://github.com/kitconcept/volto-export/pull/19)


## 4.2.0 (2023-03-21)

### Feature

- Use a `dataAdapter` for the slider instead of an `useEffect`. Fix the `image_scales` problem in edit. @sneridagh [#18](https://github.com/kitconcept/volto-export/pull/18)


## 4.1.0 (2023-01-26)

### Feature

- Support for stored catalog `image_scales` @sneridagh [#16](https://github.com/kitconcept/volto-export/pull/16)

### Internal

- Deprecate set-output in GHA @sneridagh [#14](https://github.com/kitconcept/volto-export/pull/14)
- Add towncrier @sneridagh [#17](https://github.com/kitconcept/volto-export/pull/17)


## 4.0.0 (2022-11-24)

### Breaking

- Moved to use the Volto 16.1.0 `object_list` feature to sync the current slide in both the block UI and in the sidebar block settings.
Removed the custom widget with a custom React context that enabled this feature.
If you have any customizations on the slider block, might need update to the new schema. @sneridagh

## 3.0.1 (2022-11-21)

### Bugfix

- Disambiguation of an i18n msgid with one in core @sneridagh

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
