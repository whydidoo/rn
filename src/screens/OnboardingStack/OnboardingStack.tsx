import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

import { OnboardingContext } from './context';
import { Onboarding } from './Onboarding';
import { IOnboardingProps, TOnboardingStack } from './types';
import { Welcome } from './Welcome';

const Stack = createNativeStackNavigator<TOnboardingStack>();

const animationConfig = {
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
            ...animationConfig,
          }}
        />
      </Stack.Navigator>
    </OnboardingContext.Provider>
  );
};
