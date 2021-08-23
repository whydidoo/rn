import { ImageSourcePropType } from 'react-native';

export interface IOnboardingProps {
  setCompleteOnboarding: () => void;
}

export type TOnboardingStack = {
  Welcome: undefined;
  Onboarding: undefined;
};

export interface IOrboardingItemProps {
  sourse: ImageSourcePropType;
  title: string;
  description: string;
}
