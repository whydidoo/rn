import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, G } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import { arc } from 'd3';
import { useGetColorsByTheme } from '../../../theme';

const size = 60;

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface CircularPogressProps {
  progress: 25 | 50 | 75 | 100;
}

export const Circle: React.FC<CircularPogressProps> = ({ progress }) => {
  const center = size / 2;
  const outerRadius = size / 2;

  const proportion = progress / 100;

  const full = arc()({
    innerRadius: outerRadius - 2,
    outerRadius: outerRadius - 1,
    startAngle: 0,
    endAngle: 2 * Math.PI,
  })!;

  const progressPath = arc().cornerRadius(20)({
    innerRadius: outerRadius - 3,
    outerRadius,
    startAngle: 0,
    endAngle: proportion * 2 * Math.PI,
  })!;

  const { borderColor } = useGetColorsByTheme();

  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#9DCEFF" />
          <Stop offset="1" stopColor="#92A3FD" />
        </LinearGradient>
      </Defs>
      <G>
        <Path
          fill={borderColor}
          d={full}
          transform={`translate(${center}, ${center})`}
        />
        <AnimatedPath
          fill="url(#grad)"
          d={progressPath}
          strokeLinecap="round"
          transform={`translate(${center}, ${center})`}
        />
      </G>
    </Svg>
  );
};
