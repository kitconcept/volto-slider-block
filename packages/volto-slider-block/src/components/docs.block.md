---
block: slider
---

Shows a slider of slides, each linking to a content item or an external URL, with an optional autoplay.

The block stores the slides as they were chosen, with any values that an editor overrode. A slide that links to a content item keeps a copy of that item's title, description and image, so the block can show them without a lookup. Only the item's URL and that copy are stored, not the item itself.

### Fields

- `slides`: a list of slide objects, in display order. Each slide has an `@id` that identifies it in the editor and the fields below.
- `slides[].href`: the link of the slide, as a list with one object. Its `@id` is the URL of a content item, or an external URL. The object can also hold the `Title`, `Description`, `image_field`, `image_scales` and `hasPreviewImage` copied from that item.
- `slides[].title` and `slides[].description`: the text shown on the slide. They are copied from the linked item when the slide is set, and an editor can change them.
- `slides[].head_title`: optional kicker, a line shown above the title.
- `slides[].preview_image`: optional image that replaces the image of the linked item, as a list with one object.
- `slides[].buttonText`: optional text of the button. When it is missing, the view shows the default text.
- `slides[].hideButton`: optional boolean. `true` hides the button.
- `slides[].flagAlign`: optional, `left` or `right`. Defaults to `left`.
- `styles.flagColor`: optional color of the flag, one of `slider-custom-color-1` to `slider-custom-color-8`. Defaults to `slider-custom-color-1`.
- `autoplayEnabled`: optional boolean. `true` moves to the next slide on its own.
- `autoplayDelay`: optional integer, in milliseconds, between two transitions. Defaults to `4000`.
- `autoplayJump`: optional boolean. `true` changes slides without an animation.
- `variation`: optional. Set when the block uses a variation other than the default one. See the Simple variation for its own fields.

The autoplay fields are stored only on sites that enable autoplay for the block.

### Example

Minimal block with one slide that links to an external page:

```json
{
  "@type": "slider",
  "slides": [
    {
      "@id": "9f2d6c1e-0a4b-4c8e-8f3a-2b7d5e1c4a10",
      "href": [{ "@id": "https://www.example.org/annual-report" }],
      "title": "Annual report",
      "description": "Read the figures of the last year."
    }
  ]
}
```

Block with two slides, a flag color, and autoplay:

```json
{
  "@type": "slider",
  "slides": [
    {
      "@id": "9f2d6c1e-0a4b-4c8e-8f3a-2b7d5e1c4a10",
      "href": [
        {
          "@id": "/news/annual-report",
          "Title": "Annual report",
          "Description": "Read the figures of the last year.",
          "hasPreviewImage": true,
          "image_field": "preview_image",
          "image_scales": {}
        }
      ],
      "title": "Annual report",
      "description": "Read the figures of the last year.",
      "head_title": "News",
      "buttonText": "Read more",
      "flagAlign": "right"
    },
    {
      "@id": "3c7e1b5a-6d2f-4e9a-b8c0-1f4a7d9e2b36",
      "href": [{ "@id": "https://www.example.org/events" }],
      "title": "Events",
      "description": "Join the events of the season.",
      "hideButton": true
    }
  ],
  "styles": {
    "flagColor": "slider-custom-color-2"
  },
  "autoplayEnabled": true,
  "autoplayDelay": 6000,
  "autoplayJump": false
}
```
