import * as React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, { Path, SvgProps } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const colors = ['rgba(255, 255, 255, 1)', 'rgba(173, 164, 165, 1)'];

const getColor = (animValue: Animated.SharedValue<number>) => {
  'worklet';

  return {
    stroke: interpolateColor(animValue.value, [1, 0], colors),
  };
};

const AnimatedChildren: React.FC<{
  animateValue: Animated.SharedValue<number>;
}> = ({ animateValue }) => {
  const styleIconFirstProps = useAnimatedProps(
    () => getColor(animateValue),
    [animateValue],
  );

  const styleTotalSecondProps = useAnimatedProps(
    () => getColor(animateValue),
    [animateValue],
  );

  return (
    <>
      <AnimatedPath
        clipRule="evenodd"
        d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948z"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={styleIconFirstProps}
      />
      <AnimatedPath
        clipRule="evenodd"
        d="M11.985 12.006A4.596 4.596 0 107.389 7.41a4.58 4.58 0 004.564 4.596h.032z"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={styleTotalSecondProps}
      />
    </>
  );
};

export const AnimatedPerson: React.FC<
  SvgProps & { animateValue: Animated.SharedValue<number> }
> = ({ animateValue, children, ...props }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <AnimatedChildren animateValue={animateValue} />
    {children}
  </Svg>
);
