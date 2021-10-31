import React from 'react';
import { StyleSheet } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { Box, Button, Text, ViewArea } from 'components';

import { TAuthStack } from '../types';
import { Slider } from './Slider';

type TNavigationParams = StackScreenProps<TAuthStack, 'RegisterConfirm'>;

export const RegisterConfirm: React.FC<TNavigationParams> = ({
  navigation,
}) => {
  return (
    <ViewArea style={styles.container}>
      <Box alignItems="center">
        <Text variant="H4Bold">What is your goal ?</Text>
        <Text
          variant="SmallTextRegular"
          color="gray1"
          maxWidth={182}
          textAlign="center"
        >
          It will help us to choose a best program for you
        </Text>
      </Box>
      <Slider />
      <Button
        text="Confirm"
        onPress={() => navigation.replace('RegisterSuccess')}
      />
    </ViewArea>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});
