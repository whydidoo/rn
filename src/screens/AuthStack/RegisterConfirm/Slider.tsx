import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { useSafeAreaThemeParams } from 'theme';

import { Box } from 'components';

import {
  dataRender,
  IEmptySliderItem,
  ITEM_WIDTH,
  SPACER_SIZE,
} from './constants';
import { SliderItem } from './SliderItem';
import { ISliderItemProps } from './types';

const AnimatedList = Animated.createAnimatedComponent(
  FlatList,
) as typeof FlatList;

export const Slider: React.FC = () => {
  const { left, right } = useSafeAreaThemeParams();

  const translationX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationX.value = event.contentOffset.x;
  });

  const style = useMemo(
    () => ({ marginLeft: -left, marginRight: -right }),
    [left, right],
  );

  const keyExtractor = useCallback(
    (_item: ISliderItemProps | IEmptySliderItem, idx: number) => String(idx),
    [],
  );

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: ISliderItemProps | IEmptySliderItem;
      index: number;
    }) => {
      if ((item as unknown as IEmptySliderItem).key) {
        return <Box width={SPACER_SIZE} />;
      }

      return (
        <SliderItem
          {...(item as ISliderItemProps)}
          translationX={translationX}
          idx={index}
        />
      );
    },
    [translationX],
  );

  return (
    <AnimatedList
      horizontal
      bounces={false}
      style={style}
      showsHorizontalScrollIndicator={false}
      onScroll={scrollHandler}
      decelerationRate="fast"
      contentContainerStyle={styles.container}
      snapToInterval={ITEM_WIDTH}
      renderToHardwareTextureAndroid
      snapToAlignment="start"
      scrollEventThrottle={16}
      data={dataRender}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
