import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';

import { Login } from './Login';
import { Register } from './Register';
import { RegisterConfirm } from './RegisterConfirm';
import { RegisterData } from './RegisterData';
import { RegisterSuccess } from './RegisterSuccess';
import { TAuthStack } from './types';

const Stack = createStackNavigator<TAuthStack>();

const animationConfig = {
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
        options={{ ...animationConfig }}
      />
      <Stack.Screen
        name="RegisterData"
        component={RegisterData}
        options={{ ...animationConfig }}
      />
      <Stack.Screen
        name="RegisterConfirm"
        component={RegisterConfirm}
        options={{ ...animationConfig }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ ...animationConfig }}
      />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{ ...animationConfig }}
      />
    </Stack.Navigator>
  );
};
