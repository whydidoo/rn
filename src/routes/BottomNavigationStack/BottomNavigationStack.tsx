import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, ViewArea } from 'components';

import { Tabs } from './Tabs';
import { BottomNavigationStackProps } from './types';

const Stack = createBottomTabNavigator<BottomNavigationStackProps>();

const Test: React.FC = () => (
  <ViewArea>
    <Text>Test</Text>
  </ViewArea>
);

const Home: React.FC = () => (
  <ViewArea>
    <Text>Home</Text>
  </ViewArea>
);
export const BottomNavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      tabBar={props => <Tabs {...props} />}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Activity" component={Test} />
      <Stack.Screen name="Camera" component={Home} />
      <Stack.Screen name="Profile" component={Test} />
    </Stack.Navigator>
  );
};
