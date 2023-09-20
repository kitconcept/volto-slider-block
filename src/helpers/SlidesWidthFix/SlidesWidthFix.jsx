export const SlidesWidthFix = ({ width }) => {
  return (
    <style>
      {/* This is needed because the limitation on react-slick and the
      Volto Block Engine containers. We workaround it by measuring the
      layout container (and has to be an external one) and force this
      width to the main slider container one with an inline style. */}
      {`
#page-add .block.slider .slick-slider,
#page-edit .block.slider .slick-slider {
width: calc(${width}px - var(slider-block-edit-width-adjustment, 0px)) !important;
max-width: 1440px !important;
}`}
    </style>
  );
};

export default SlidesWidthFix;
