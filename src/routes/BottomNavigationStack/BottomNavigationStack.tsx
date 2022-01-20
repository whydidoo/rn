import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, ViewArea } from 'components';

import { Tabs } from './Tabs';
import { Breathe } from './Test1';
import { BottomNavigationStackProps } from './types';

const Stack = createBottomTabNavigator<BottomNavigationStackProps>();

const Test: React.FC = () => (
  <ViewArea>
    <Text>Test</Text>
  </ViewArea>
);

const Home: React.FC = () => {
  return <Breathe />;
};

const optionsScreen = {
  headerShown: false,
};

export const BottomNavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      tabBar={props => <Tabs {...props} />}>
      <Stack.Screen name="Home" component={Home} options={optionsScreen} />
      <Stack.Screen name="Activity" component={Test} options={optionsScreen} />
      <Stack.Screen name="Camera" component={Home} options={optionsScreen} />
      <Stack.Screen name="Profile" component={Test} options={optionsScreen} />
    </Stack.Navigator>
  );
};
