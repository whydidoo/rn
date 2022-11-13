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

  const styleTotalThreeProps = useAnimatedProps(
    () => getColor(animateValue),
    [animateValue],
  );

  return (
    <>
      <AnimatedPath
        clipRule="evenodd"
        d="M15.04 4.051c1.01.402 1.319 1.802 1.732 2.252.413.45 1.004.603 1.331.603a3.147 3.147 0 013.147 3.146v5.795a4.22 4.22 0 01-4.22 4.22H6.97a4.22 4.22 0 01-4.22-4.22v-5.795a3.147 3.147 0 013.147-3.146c.326 0 .917-.153 1.331-.603.413-.45.721-1.85 1.731-2.252 1.011-.402 5.071-.402 6.081 0z"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={styleIconFirstProps}
      />
      <AnimatedPath
        d="M17.495 9.5h.01"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={styleTotalSecondProps}
      />
      <AnimatedPath
        clipRule="evenodd"
        d="M15.179 13.128a3.179 3.179 0 10-6.358 0 3.179 3.179 0 006.358 0z"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={styleTotalThreeProps}
      />
    </>
  );
};

export const AnimatedCamera: React.FC<
  SvgProps & { animateValue: Animated.SharedValue<number> }
> = ({ animateValue, children, ...props }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <AnimatedChildren animateValue={animateValue} />
    {children}
  </Svg>
);
