import React from 'react';

import { GradientText, GradientBox, Box, Text } from 'components';

import { StatusWrapper } from '../styled';
import { IWaterIntakeProps } from './types';
import { WaterIntakePoint } from './WaterIntakePoint';

export const WaterIntake: React.FC<IWaterIntakeProps> = ({ data, liters }) => {
  const height = 275;
  const totalMl = liters * 1000;
  const drunkMl =
    data?.reduce((prev, current) => {
      return prev + current.value;
    }, 0) || 0;

  const mlPx = (height / totalMl) * drunkMl;
  return (
    <StatusWrapper>
      <Box flexDirection="row">
        <Box
          height={height}
          width={20}
          backgroundColor="borderColor"
          borderRadius={6}
          overflow="hidden"
          position="relative">
          <GradientBox
            gradient="waterIntakeLinear"
            height={mlPx}
            bottom={0}
            position="absolute"
            width={20}
          />
        </Box>
        <Box ml={2}>
          <Text variant="SmallTextMedium" color="blackColor">
            Water Intake
          </Text>

          <GradientText variant="MediumTextSemiBold">
            {liters} Liters
          </GradientText>

          <Text variant="CaptionRegular" color="gray1" mt={2}>
            Real time updates
          </Text>
          {data?.slice(-5).map((item, index, arr) => {
            return (
              <WaterIntakePoint
                key={item.title}
                value={item.value}
                title={item.title}
                isLast={arr.length - 1 === index}
              />
            );
          })}
        </Box>
      </Box>
    </StatusWrapper>
  );
};
