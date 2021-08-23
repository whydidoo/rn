import * as React from 'react';
import { useEffect } from 'react';
import Animated, {
  useDerivedValue,
  withTiming,
  useSharedValue,
  useAnimatedProps,
  interpolate,
} from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Stop, Path, G } from 'react-native-svg';

import { describeArc } from 'components/utils';

import { useGetColorsByTheme } from '../../../theme';

const size = 60;
const strokeWidth = 2;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;

const dFull = describeArc(cx, cy, r, 0, 359);

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface CircularPogressProps {
  progress: number;
}

export const Circle: React.FC<CircularPogressProps> = ({ progress }) => {
  const outerRadius = size / 2;
  const proportion = useSharedValue(progress / 100);
  const { borderColor } = useGetColorsByTheme();

  if (progress < 0) {
    throw new Error('Значение progress должно быть больше 0');
  }

  useEffect(() => {
    let value = progress;

    if (progress > 100) {
      value = 100;
    }

    proportion.value = withTiming(value / 100, { duration: 400 });
  }, [progress, proportion]);

  const angle = useDerivedValue(() => {
    return interpolate(proportion.value, [0, 1], [0, 359.99]);
  }, []);

  const animatedProps = useAnimatedProps(() => {
    return {
      d: describeArc(cx, cy, r, 0, angle.value),
    };
  }, [proportion, outerRadius]);

  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#9DCEFF" />
          <Stop offset="1" stopColor="#92A3FD" />
        </LinearGradient>
      </Defs>
      <G>
        <Path stroke={borderColor} d={dFull} strokeWidth={2} />
        <AnimatedPath
          stroke="url(#grad)"
          animatedProps={animatedProps}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </G>
    </Svg>
  );
};
