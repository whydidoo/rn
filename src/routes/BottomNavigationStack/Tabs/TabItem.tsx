import React, { useCallback, useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { getThemeGradient } from 'theme';

import { Box, GradientBox } from 'components';

import { BottomNavigationStackProps } from '../types';
import { Icons } from './constants';

const AnimatedLinearGradient = Animated.createAnimatedComponent(
  LinearGradient,
) as any;

const AnimatedGradient = Animated.createAnimatedComponent(GradientBox);

const sizeIcon = 24;

const AnimatedView = Animated.createAnimatedComponent(View);

interface ITabItemProps extends Pick<BottomTabBarProps, 'navigation'> {
  isFocused: boolean;
  routeName: string;
  routeKey: string;
}

export const TabItem: React.FC<ITabItemProps> = ({
  navigation,
  isFocused,
  routeKey,
  routeName,
}) => {
  const route = routeName as keyof BottomNavigationStackProps;
  const IconsComponent = Icons[route];
  const animValue = useSharedValue(Number(isFocused));

  useEffect(() => {
    animValue.value = withTiming(Number(isFocused), {
      duration: 400,
    });
  }, [animValue, isFocused]);

  const onPress = useCallback(() => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route, key: routeKey, merge: true });
    }
  }, [isFocused, navigation, routeKey, route]);

  const gradient = getThemeGradient('purpleLinear');

  const styleIconGradient = useAnimatedStyle(() => {
    return {
      height: interpolate(animValue.value, [0, 1], [0, sizeIcon]),
    };
  }, [animValue]);

  const styleCircle = useAnimatedStyle(() => ({ opacity: animValue.value }));

  return (
    <Pressable onPress={onPress}>
      <Box width={sizeIcon} height={sizeIcon} position="relative">
        <Box zIndex={2}>
          <IconsComponent.disactive animateValue={animValue} />
        </Box>
        <AnimatedView style={[style.iconsStyle, styleIconGradient]}>
          <IconsComponent.simple
            fill={'url(#grad)'}
            width={sizeIcon}
            height={sizeIcon}>
            <Defs>
              <AnimatedLinearGradient id="grad" x1={0} x2={1}>
                <Stop offset={0} stopColor={gradient!.colors[0]} />
                <Stop offset={1} stopColor={gradient!.colors[1]} />
              </AnimatedLinearGradient>
            </Defs>
          </IconsComponent.simple>
        </AnimatedView>

        <Box
          alignItems="center"
          mt="3px"
          position="absolute"
          top={sizeIcon}
          left="0"
          right="0">
          <AnimatedGradient
            gradient="purpleLinear"
            width={4}
            height={4}
            borderRadius={4}
            style={styleCircle}
          />
        </Box>
      </Box>
    </Pressable>
  );
};

const style = StyleSheet.create({
  iconsStyle: {
    width: sizeIcon,
    overflow: 'hidden',
    top: -sizeIcon,
  },
});
