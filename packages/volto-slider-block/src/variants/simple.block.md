---
block: slider
variation: simple
---

Shows each slide as a teaser card that links to its target.

The Simple variation reads the `href`, `preview_image`, `buttonText`, `hideButton` and `flagAlign` fields of each slide, and stores the same slides as the default variation. The block stores `"variation": "simple"` to select it.

### Example

Block with the Simple variation:

```json
{
  "@type": "slider",
  "variation": "simple",
  "slides": [
    {
      "@id": "9f2d6c1e-0a4b-4c8e-8f3a-2b7d5e1c4a10",
      "href": [{ "@id": "https://www.example.org/annual-report" }],
      "buttonText": "Read the report",
      "flagAlign": "left"
    }
  ]
}
```
