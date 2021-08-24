import React from 'react';
import { Image } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

import { AnimatedGradientBox, Box, Text } from 'components';

import {
  ITEM_HEIGHT,
  ITEM_WIDTH,
  OFFSET_ITEM,
  SCALE_COEFFICIENT_HEIGHT,
} from './constants';
import { ISliderItemProps } from './types';

export const SliderItem: React.FC<
  ISliderItemProps & {
    translationX: Animated.SharedValue<number>;
    idx: number;
  }
> = ({ title, description, translationX, idx, img }) => {
  const inputRange = [
    (idx - 2) * ITEM_WIDTH,
    (idx - 1) * ITEM_WIDTH,
    idx * ITEM_WIDTH,
  ];
  const stylesAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleY: interpolate(translationX.value, inputRange, [
            SCALE_COEFFICIENT_HEIGHT,
            1,
            SCALE_COEFFICIENT_HEIGHT,
          ]),
        },
      ],
      opacity: interpolate(translationX.value, inputRange, [0.3, 1, 0.3]),
    };
  }, [translationX]);

  return (
    <Box width={ITEM_WIDTH} height={ITEM_HEIGHT}>
      <AnimatedGradientBox
        flex={1}
        gradient="blueLinear"
        style={[stylesAnimated]}
        mx={OFFSET_ITEM}
        borderRadius={4}
        justifyContent="center"
        alignItems="center">
        <Image source={img} />
        <Text color="whiteColor">{title}</Text>
        <Text color="whiteColor" width="40%">
          {description}
        </Text>
      </AnimatedGradientBox>
    </Box>
  );
};
