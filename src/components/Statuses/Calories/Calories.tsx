import React from 'react';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';

import * as d3 from 'd3';
import { getLinearCoordinates, getThemeGradient } from 'theme';

import { Box, GradientText, Text } from 'components';

import { StatusWrapper } from '../styled';
import { ICaloriesProps } from './types';

const blueLinear = getThemeGradient('blueLinear')!;
const calLiner = getThemeGradient('caloriesLinear');

const blueLinersCoordinates = getLinearCoordinates(blueLinear);
const calLinerCoordinates = getLinearCoordinates(calLiner);

export const Calories: React.FC<ICaloriesProps> = ({
  calories,
  currentValue,
}) => {
  const size = 66;
  const arc = d3.arc().cornerRadius(5);
  const percent = (currentValue / calories) * 100;

  const path = arc({
    innerRadius: 27,
    outerRadius: size / 2,
    startAngle: 0,
    endAngle: ((Math.PI * 2) / 100) * percent,
  })!;

  return (
    <StatusWrapper>
      <Box alignItems="center">
        <Box width="100%">
          <Text variant="SmallTextMedium" pb={1} color="blackColor">
            Sleep
          </Text>
          <GradientText variant="MediumTextSemiBold">
            {calories} kCal
          </GradientText>
        </Box>

        <Box
          position="relative"
          alignItems="center"
          justifyContent="center"
          top="12px">
          <Svg width={size} height={size}>
            <Defs>
              <LinearGradient id="grad" {...blueLinersCoordinates}>
                <Stop offset="0" stopColor={blueLinear.colors[0]} />
                <Stop offset="1" stopColor={blueLinear.colors[1]} />
              </LinearGradient>
              <LinearGradient id="calGrad" {...calLinerCoordinates}>
                <Stop offset="0" stopColor={calLiner.colors[1]} />
                <Stop offset="1" stopColor={calLiner.colors[0]} />
              </LinearGradient>
            </Defs>

            <Circle
              r={24}
              fill="url(#grad)"
              translateX={size / 2}
              translateY={size / 2}
            />

            <Path
              strokeLinecap="round"
              d={path}
              fill="url(#calGrad)"
              translateX={size / 2}
              translateY={size / 2}
            />
          </Svg>
          <Box position="absolute">
            <Text variant="CaptionRegular" color="whiteColor">
              {currentValue}
            </Text>
            <Text variant="CaptionRegular" color="whiteColor">
              kCal
            </Text>
          </Box>
        </Box>
      </Box>
    </StatusWrapper>
  );
};
