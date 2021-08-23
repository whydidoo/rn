import { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ASYNC_STORAGE_NAME_DATA = 'isOnboardingComplete';
const ASYNC_VALUE = 'complete';

export const useGetIsOnboardingComplete: () => {
  setCompleteOnboarding: () => void;
  isOnboarding: null | boolean;
} = () => {
  const [isOnboarding, setIsOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem(ASYNC_STORAGE_NAME_DATA);
        setIsOnboarding(!value);
      } catch (e) {
        setIsOnboarding(false);
      }
    };

    getData();
  }, []);

  const setCompleteOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_NAME_DATA, ASYNC_VALUE);
    } catch {
      setIsOnboarding(false);
    }
    setIsOnboarding(false);
  };

  return {
    isOnboarding,
    setCompleteOnboarding,
  };
};
