import DefaultSliderBody from './DefaultBody';

const SliderBody = (props) => {
  const { variation } = props;

  const BodyComponent = variation?.view || DefaultSliderBody;

  return <BodyComponent {...props} />;
};

export default SliderBody;
