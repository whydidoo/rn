import React from 'react';

import { IOnboardingProps } from './types';

export const OnboardingContext = React.createContext<
  Pick<IOnboardingProps, 'setCompleteOnboarding'>
>({
  setCompleteOnboarding: () => {},
});
