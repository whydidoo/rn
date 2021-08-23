import React from 'react';

import { getStorybookUI } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '../src/theme';

import './rn-addons';

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export const StorybookUIRoot = () => {
  const StorybookUI = getStorybookUI({
    asyncStorage: null,
  });

  return (
    <ThemeProvider theme={theme}>
      <StorybookUI />
    </ThemeProvider>
  );
};
