import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';

import { Register } from './Register';
import { RegisterConfirm } from './RegisterConfirm';
import { RegisterData } from './RegisterData';
import { TAuthStack } from './types';

const Stack = createStackNavigator<TAuthStack>();

const animtationConfig = {
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ ...animtationConfig }}
      />
      <Stack.Screen
        name="RegisterData"
        component={RegisterData}
        options={{ ...animtationConfig }}
      />
      <Stack.Screen
        name="RegisterConfirm"
        component={RegisterConfirm}
        options={{ ...animtationConfig }}
      />
    </Stack.Navigator>
  );
};
