import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, {
  withTiming,
  useAnimatedProps,
  useAnimatedStyle,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';
import { mixColor } from 'react-native-redash';

import { useGetColorsByTheme, getThemeGradient } from 'theme';

import {
  CircleStyled,
  GradientStyled,
  positionCircle,
  sizeSircle,
  widthToggle,
} from './styled';
import { IToggleProps } from './types';

const CircleStyledAnimated = Animated.createAnimatedComponent(CircleStyled);
const AnimatedGradient = Animated.createAnimatedComponent(GradientStyled);

export const Toggle: React.FC<IToggleProps> = ({
  value,
  disabled,
  onChange,
}) => {
  const animateValue = useSharedValue(Number(0));
  const { gray3 } = useGetColorsByTheme();
  const { colors, ...props } = getThemeGradient('purpleLinear')!;
  const [start, end] = colors;

  useEffect(() => {
    animateValue.value = withTiming(Number(value), {
      duration: 400,
    });
  }, [value, animateValue]);

  const onPress = useCallback(() => {
    onChange(!value);
  }, [onChange, value]);

  const animatedProps = useAnimatedProps(() => {
    return {
      colors: [
        mixColor(animateValue.value, gray3, start),
        mixColor(animateValue.value, gray3, end),
      ],
    };
  }, []);

  const circleAnimatedStyle = useAnimatedStyle(
    () => ({
      left: interpolate(
        animateValue.value,
        [0, 1],
        [positionCircle, widthToggle - sizeSircle - positionCircle],
      ),
    }),
    [animateValue],
  );

  return (
    <TouchableWithoutFeedback
      containerStyle={style.container}
      onPress={onPress}
      disabled={disabled}
    >
      <AnimatedGradient
        colors={colors}
        animatedProps={animatedProps}
        {...props}
      >
        <CircleStyledAnimated style={circleAnimatedStyle} />
      </AnimatedGradient>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
});
