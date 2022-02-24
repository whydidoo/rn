import React from 'react';
import Animated from 'react-native-reanimated';
import { useVector } from 'react-native-redash';
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text,
} from 'react-native-svg';

import { useGetLayout } from 'hooks';
import { getThemeGradient, useGetTypography } from 'theme';

import { Box } from 'components';

import { Cursor } from './Cursor';
import { useDataChart } from './useDataChart';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const HeartRateBar: React.FC = () => {
  const translation = useVector();

  const { layout, getLayout } = useGetLayout();
  const { colors } = getThemeGradient('blueLinear')!;
  const {
    activeLine,
    activeCoverLine,
    passivePath,
    width,
    heartRateData,
    height,
    parsePath,
  } = useDataChart(translation, layout);
  const text = useGetTypography();

  const { fontFamily, fontSize, fontWeight } = text.SmallTextMedium;
  const mediumText = text.MediumTextSemiBold;

  return (
    <Box
      onLayout={getLayout}
      borderRadius={4}
      overflow="hidden"
      position="relative">
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor={colors[0]} />
            <Stop offset="1" stopColor={colors[1]} />
          </LinearGradient>

          <LinearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <Stop offset="0%" stopColor="#93A7FE" stopOpacity={0.2} />
            <Stop offset="100%" stopColor="#fff" stopOpacity={0.2} />
          </LinearGradient>
        </Defs>

        <Rect width={width} height={height} fill="url(#grad)" opacity={0.3} />

        <G id="activeChart">
          <AnimatedPath d={activeCoverLine} fill="url(#gradient)" stroke={2} />
          <AnimatedPath
            fill="transparent"
            stroke="#92A3FD"
            d={activeLine}
            strokeWidth={2}
          />
        </G>

        <Path
          fill="transparent"
          stroke="#92A3FD"
          d={passivePath}
          strokeWidth={2}
          opacity={0.3}
        />

        <G translateX={20} translateY={30}>
          <Text
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            fontSize={fontSize}
            fill="black">
            Heart Rate
          </Text>
          <Text
            translateY={20}
            fontFamily={mediumText.fontFamily}
            fontWeight={mediumText.fontWeight}
            fill="url(#grad)"
            fontSize={mediumText.fontSize}>
            {heartRateData.value} BPM
          </Text>
        </G>
      </Svg>

      <Cursor fullPath={parsePath} translation={translation} />
    </Box>
  );
};
