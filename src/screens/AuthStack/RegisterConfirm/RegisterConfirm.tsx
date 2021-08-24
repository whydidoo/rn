import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text, ViewArea } from 'components';

import { Slider } from './Slider';

export const RegisterConfirm: React.FC = () => {
  return (
    <ViewArea style={styles.container}>
      <Box alignItems="center">
        <Text variant="H4Bold">What is your goal ?</Text>
        <Text
          variant="SmallTextRegular"
          color="gray1"
          maxWidth={182}
          textAlign="center">
          It will help us to choose a best program for you
        </Text>
      </Box>
      <Slider />
    </ViewArea>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});
