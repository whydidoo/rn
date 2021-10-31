import * as React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  interpolate,
} from 'react-native-reanimated';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const colors = ['rgba(255, 255, 255, 1)', 'rgba(173, 164, 165, 1)'];

const AnimatedChildren: React.FC<{
  animateValue: Animated.SharedValue<number>;
}> = ({ animateValue }) => {
  const styleIconZipperProps = useAnimatedProps(() => {
    return {
      stroke: interpolateColor(animateValue.value, [1, 0], colors),
    };
  }, [animateValue]);

  const styleTotalPathProps = useAnimatedProps(() => {
    return {
      stroke: interpolateColor(animateValue.value, [1, 0], colors),
    };
  }, [animateValue]);

  const styleIconCircleProps = useAnimatedProps(() => {
    return {
      fill: interpolateColor(animateValue.value, [1, 0], colors),
      opacity: interpolate(animateValue.value, [1, 0], [0, 1]),
    };
  }, [animateValue]);

  return (
    <>
      <AnimatedPath
        d="M7.245 14.781l2.993-3.89 3.414 2.682 2.929-3.78"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={styleIconZipperProps}
      />
      <AnimatedCircle
        cx={19.995}
        cy={4.2}
        r={1.922}
        animatedProps={styleIconCircleProps}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        d="M14.924 3.12H7.657c-3.012 0-4.88 2.133-4.88 5.144v8.083c0 3.011 1.832 5.135 4.88 5.135h8.604c3.011 0 4.878-2.124 4.878-5.135v-7.04"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={styleTotalPathProps}
      />
    </>
  );
};

export const AnimatedActivity: React.FC<
  SvgProps & { animateValue: Animated.SharedValue<number> }
> = ({ animateValue, children, ...props }) => (
  <Svg fill="none" {...props}>
    <AnimatedChildren animateValue={animateValue} />
    {children}
  </Svg>
);
