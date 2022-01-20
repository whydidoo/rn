import React, { useMemo } from 'react';
import { Image } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

import { useSafeAreaThemeParams } from 'theme';

import { AnimatedGradientBox, Box, Text } from 'components';

import { ITEM_WIDTH, OFFSET_ITEM, SCALE_COEFFICIENT_HEIGHT } from './constants';
import { ISliderItemProps } from './types';

export const SliderItem: React.FC<
  ISliderItemProps & {
    translationX: Animated.SharedValue<number>;
    idx: number;
  }
> = ({ title, description, translationX, idx, img }) => {
  const { isLowScreen } = useSafeAreaThemeParams();

  const inputRange = [
    (idx - 2) * ITEM_WIDTH,
    (idx - 1) * ITEM_WIDTH,
    idx * ITEM_WIDTH,
  ];

  const styleImg = useMemo(
    () => ({ height: isLowScreen ? 205 : 300 }),
    [isLowScreen],
  );
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
    <Box width={ITEM_WIDTH}>
      <AnimatedGradientBox
        gradient="blueLinear"
        style={stylesAnimated}
        p={6}
        mx={OFFSET_ITEM}
        borderRadius={4}
        justifyContent="space-evenly"
        alignItems="center">
        <Image source={img} style={styleImg} resizeMode="contain" />
        <Box alignItems="center" pt={4}>
          <Text color="whiteColor" variant="MediumTextSemiBold">
            {title}
          </Text>
          <Box width={50} height="1px" backgroundColor="whiteColor" />
          <Text
            mt={5}
            color="whiteColor"
            variant="SmallTextRegular"
            textAlign="center">
            {description}
          </Text>
        </Box>
      </AnimatedGradientBox>
    </Box>
  );
};
