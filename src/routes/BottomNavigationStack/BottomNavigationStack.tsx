import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Home } from 'screens';

import { DailyAction, Gap, ProcentBanner, ViewArea } from 'components';

import { Tabs } from './Tabs';
import { BottomNavigationStackProps } from './types';

const Stack = createBottomTabNavigator<BottomNavigationStackProps>();

const Test: React.FC = () => {
  return (
    <ViewArea>
      <ProcentBanner
        title="BMI (Body Mass Index)"
        subtitle="You have a normal weight"
      />
      <Gap size={32} vertical={true} />
      <DailyAction text="Compare my Photo" />
    </ViewArea>
  );
};

const optionsScreen = {
  headerShown: false,
};

const renderTabBar = (props: BottomTabBarProps) => <Tabs {...props} />;

export const BottomNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" tabBar={renderTabBar}>
      <Stack.Screen name="Home" component={Home} options={optionsScreen} />
      <Stack.Screen name="Activity" component={Test} options={optionsScreen} />
      <Stack.Screen name="Camera" component={Test} options={optionsScreen} />
      <Stack.Screen name="Profile" component={Test} options={optionsScreen} />
    </Stack.Navigator>
  );
};
