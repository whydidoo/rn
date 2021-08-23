import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { MainStack } from 'routes';
import { ThemeProvider } from 'styled-components/native';
import { theme } from 'theme';
import colors from 'theme/colors/colors.json';

enableScreens(false);

const navTheme = DefaultTheme;
navTheme.colors.background = colors.whiteColor;

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
          <MainStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
