import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { getYForX, Path, Vector } from 'react-native-redash';

const CURSORSIZE = 50;

interface ICursorProps {
  fullPath: Path;
  translation: Vector<Animated.SharedValue<number>>;
}

export const Cursor: React.FC<ICursorProps> = ({ fullPath, translation }) => {
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: event => {
      translation.x.value = event.x;
      translation.y.value = getYForX(fullPath, translation.x.value) || 0;
    },
    onActive: event => {
      translation.x.value = event.x;
      translation.y.value = getYForX(fullPath, translation.x.value) || 0;
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
          <Animated.View style={[styles.cursor, style]}>
            <View style={styles.cursorBody} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  cursor: {
    width: CURSORSIZE,
    height: CURSORSIZE,
    borderRadius: CURSORSIZE / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursorBody: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'black',
  },
});
