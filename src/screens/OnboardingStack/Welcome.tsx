import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useSafeAreaThemeParams } from 'theme';
import { TColorNames } from 'theme/colors';

import { Box, Button, Text } from 'components';

import { TOnboardingStack } from './types';

type TWelcomeProps = NativeStackScreenProps<TOnboardingStack, 'Welcome'>;

export const Welcome: React.FC<TWelcomeProps> = ({ navigation }) => {
  const { left, right, bottom } = useSafeAreaThemeParams();

  return (
    <Box justifyContent="center" flex={1} pb={bottom} pr={right} pl={left}>
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Text variant="H1Bold" fontSize={36} lineHeight={54}>
          Fitness
          <Text fontSize={50} lineHeight={54} color={'#b2a4ec' as TColorNames}>
            X
          </Text>
        </Text>
        <Text variant="SubtitleRegular" color="gray1">
          Everybody Can Train
        </Text>
      </Box>
      <Button
        text="Get started"
        onPress={() => navigation.replace('Onboarding')}
      />
    </Box>
  );
};
