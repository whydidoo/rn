import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { getYForX, Path, Vector } from 'react-native-redash';

import { GradientBox } from 'components';

const CURSORSIZE = 6;

const AnimatedGradient = Animated.createAnimatedComponent(GradientBox);

interface ICursorProps {
  fullPath: Path;
  translation: Vector<Animated.SharedValue<number>>;
  stepX: number;
  setPosition: (value: number) => void;
}

export const Cursor: React.FC<ICursorProps> = ({
  fullPath,
  translation,
  stepX,
  setPosition,
}) => {
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: event => {
      const index = Math.floor(event.x / stepX) || 0;
      translation.x.value = stepX * index;
      translation.y.value = getYForX(fullPath, translation.x.value) || 0;
      runOnJS(setPosition)(index);
    },
    onActive: event => {
      const index = Math.floor(event.x / stepX) || 0;

      translation.x.value = event.x;
      translation.y.value = getYForX(fullPath, translation.x.value) || 0;
      runOnJS(setPosition)(index);
    },
    onEnd: event => {
      const index = Math.floor(event.x / stepX) || 0;
      translation.x.value = stepX * index;
      translation.y.value = getYForX(fullPath, translation.x.value) || 0;
      runOnJS(setPosition)(index);
    },
  });

  const style = useAnimatedStyle(() => {
    const translateX = translation.x.value - CURSORSIZE / 2;
    const translateY = translation.y.value - CURSORSIZE / 2;

    return {
      transform: [{ translateX }, { translateY }],
    };
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <AnimatedGradient
            style={[styles.cursor, style]}
            gradient="purpleLinear">
            <View style={styles.cursorBody} />
          </AnimatedGradient>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  cursor: {
    width: CURSORSIZE,
    height: CURSORSIZE,
    borderRadius: CURSORSIZE,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursorBody: {
    width: CURSORSIZE / 2,
    height: CURSORSIZE / 2,
    borderRadius: CURSORSIZE / 2,
    backgroundColor: '#fff',
  },
  modal: {
    width: 75,
  },
});
