import React from 'react';
import Animated from 'react-native-reanimated';
import { SvgProps } from 'react-native-svg';

export type TBaseAnimatedComponent = React.FC<
  SvgProps & {
    animateValue: Animated.SharedValue<number>;
  }
>;
