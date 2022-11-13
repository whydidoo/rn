import React from 'react';
import { serialize, useVector } from 'react-native-redash';
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
import { Modal } from './Modal';
import { useDataChart } from './useDataChart';

export const HeartRateBar: React.FC = () => {
  const translation = useVector();
  const { layout, getLayout } = useGetLayout();
  const { colors } = getThemeGradient('blueLinear')!;
  const {
    width,
    height,
    parsePath,
    stepX,
    setPosition,
    activeLine,
    activeCoverLine,
    heartRateData,
  } = useDataChart(translation, layout);

  const fullPath = serialize(parsePath);

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
            <Stop offset="0%" stopColor="#93A7FE" stopOpacity={0.3} />
            <Stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
          </LinearGradient>
        </Defs>

        <Rect width={width} height={height} fill="url(#grad)" opacity={0.3} />

        <G id="activeChart">
          <Path d={activeCoverLine} fill="url(#gradient)" strokeWidth={2} />
          <Path
            fill="transparent"
            stroke="#92A3FD"
            d={activeLine}
            strokeWidth={2}
          />
        </G>

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

        <Path
          fill="transparent"
          stroke="#92A3FD"
          d={fullPath}
          strokeWidth={2}
          opacity={0.3}
        />
      </Svg>

      <Cursor
        fullPath={parsePath}
        translation={translation}
        stepX={stepX}
        setPosition={setPosition}
      />
      <Modal translation={translation} date={heartRateData.date} />
    </Box>
  );
};
