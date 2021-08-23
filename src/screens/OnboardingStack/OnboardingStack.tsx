import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';

import { OnboardingContext } from './context';
import { Onboarding } from './Onboarding';
import { IOnboardingProps, TOnboardingStack } from './types';
import { Welcome } from './Welcom';

const Stack = createStackNavigator<TOnboardingStack>();

const animtationConfig = {
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const OnboardingStack: React.FC<IOnboardingProps> = ({
  setCompleteOnboarding,
}) => {
  return (
    <OnboardingContext.Provider value={{ setCompleteOnboarding }}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            gestureEnabled: false,
            ...animtationConfig,
          }}
        />
      </Stack.Navigator>
    </OnboardingContext.Provider>
  );
};
