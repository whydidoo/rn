import { Toggle } from 'components';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from 'theme';

export const App: React.FC = () => {
  const [value, setValue] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }} style={{ margin: 50 }}>
        <Toggle value={value} onChange={value => setValue(value)} />
      </View>
    </ThemeProvider>
  );
};
