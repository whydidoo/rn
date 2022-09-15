import React, { useMemo } from 'react';
import { Shadow } from 'react-native-shadow-2';
import Svg, { Defs, Line, LinearGradient, Stop } from 'react-native-svg';

import { TShadowOffest, TShadowSize } from 'types';

import { Box, GradientBox, Text, GradientText } from 'components';

import { IPointWater } from './types';

interface IWaterIntakePointProps extends IPointWater {
  isLast: boolean;
}

const shadowOffset = [0, 4] as unknown as TShadowOffest;
const shadowSize = [5, 5] as unknown as TShadowSize;

export const WaterIntakePoint: React.FC<IWaterIntakePointProps> = ({
  title,
  isLast,
  value,
}) => {
  const styleMemo = useMemo(() => {
    return { opacity: !isLast ? 0.5 : 1 };
  }, [isLast]);

  return (
    <Box flexDirection="row" alignItems="flex-start">
      <Box pr={2} alignItems="center">
        {!isLast ? (
          <GradientBox
            width={8}
            height={8}
            borderRadius={12}
            gradient="purpleLinear"
            my="3px"
            style={styleMemo}
          />
        ) : (
          <Shadow
            startColor="#c58bf234"
            offset={shadowOffset}
            radius={5}
            size={shadowSize}>
            <GradientBox
              width={8}
              height={8}
              borderRadius={12}
              gradient="purpleLinear"
              my="3px"
              style={styleMemo}
            />
          </Shadow>
        )}
        {!isLast && (
          <Svg width={1} height={22}>
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
                <Stop offset="0" stopColor="#C58BF2" />
                <Stop offset="1" stopColor="#EEA4CE" />
              </LinearGradient>
            </Defs>
            <Line
              stroke="url(#grad)"
              strokeDasharray="3, 2"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
            />
          </Svg>
        )}
      </Box>
      <Box>
        <Text variant="CaptionRegular" color="gray2" mt="3px">
          {title}
        </Text>
        <GradientText variant="CaptionMedium" gradient="purpleLinear">
          {value}ml
        </GradientText>
      </Box>
    </Box>
  );
};
