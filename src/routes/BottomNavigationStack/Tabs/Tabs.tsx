import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { useSafeAreaThemeParams } from 'theme';

import { Box } from 'components';

import { Search } from './Search/Search';
import { TabItem } from './TabItem';

export const Tabs: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const { right, left } = useSafeAreaThemeParams();

  return (
    <Box
      flexDirection="row"
      pl={left}
      height={80}
      pr={right}
      alignItems="center"
      justifyContent="space-between"
      bg="whiteColor"
      style={styles.container}>
      {state.routes.map((item, idx) => {
        const isFocused = idx === state.index;

        if (idx === 1) {
          return (
            <React.Fragment key={item.key}>
              <TabItem
                key={item.key}
                isFocused={isFocused}
                navigation={navigation}
                routeKey={item.key}
                routeName={item.name}
              />
              <Search />
            </React.Fragment>
          );
        }
        return (
          <TabItem
            key={item.key}
            isFocused={isFocused}
            navigation={navigation}
            routeKey={item.key}
            routeName={item.name}
          />
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 40,
      },
      android: {
        elevation: 40,
      },
    }),
  },
});
