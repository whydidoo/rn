/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {runOnUI} from 'react-native-reanimated';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Demo} from './src/components/PanGesture';

const App = () => {
  const offset = useSharedValue(0);

  const isDarkMode = useColorScheme() === 'dark';

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  const handlePress = () => {
    'worklet';
    console.log('run on ui');
  };

  return <Demo />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'tomato',
    width: 200,
    height: 200,
  },
});

export default App;
