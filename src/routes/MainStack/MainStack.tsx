import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingStack } from 'screens';
import { AuthStack } from 'screens/AuthStack/AuthStack';

import { BottomNavigationStack } from '../BottomNavigationStack';
import { useGetIsOnboardingComplete } from './hooks';
import { TMaintStack } from './types';

const Stack = createNativeStackNavigator<TMaintStack>();

export const MainStack: React.FC = () => {
  const { isOnboarding, setCompleteOnboarding } = useGetIsOnboardingComplete();

  if (isOnboarding) {
    return <OnboardingStack setCompleteOnboarding={setCompleteOnboarding} />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Home" component={BottomNavigationStack} />
    </Stack.Navigator>
  );
};
