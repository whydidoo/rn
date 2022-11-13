import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Vector } from 'react-native-redash';

import { formatDistance } from 'date-fns';
import { useGetLayout } from 'hooks';

import { Box, GradientBox, Text } from 'components';

import { Polygon, polygonWidth } from './Polygon';

interface IModalProps {
  translation: Vector<Animated.SharedValue<number>>;
  date: number;
}

export const Modal: React.FC<IModalProps> = ({ translation, date }) => {
  const { layout, getLayout } = useGetLayout();
  let xDif = (layout?.width || 0) / 2;
  let yDif = (layout?.height || 0) + 10;

  const style = useAnimatedStyle(() => {
    const translateX = translation.x.value - xDif;
    const translateY = translation.y.value - yDif;

    return {
      transform: [{ translateX }, { translateY }],
      position: 'absolute',
    };
  });

  return (
    <Animated.View style={style}>
      <GradientBox
        gradient="purpleLinear"
        px={2}
        py={1}
        onLayout={getLayout}
        zIndex={2}
        borderRadius={50}>
        <Text variant="CaptionRegular" color="whiteColor">
          {formatDistance(new Date(date), new Date(), {
            addSuffix: true,
          })}
        </Text>
      </GradientBox>
      <Box left={xDif - polygonWidth / 2} top="-2px">
        <Polygon />
      </Box>
    </Animated.View>
  );
};
