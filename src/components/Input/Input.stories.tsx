import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Box } from '../Box';
import Profile from '../Icons/Bold/Profile.svg';
import { Unit } from '../Unit';
import { Input } from './Input';

storiesOf('Input', module).add('Inputs', () => {
  return (
    <Box flex={1} bg="whiteColor" p={4}>
      <Input />
      <Box height={15} />
      <Input
        placeholder="test"
        icon={<Profile width={18} height={18} stroke="#fff" />}
      />
      <Box height={15} />
      <Input
        placeholder="secure"
        secureTextEntry
        icon={<Profile width={18} height={18} stroke="#fff" />}
      />

      <Box height={15} />
      <Box flexDirection="row">
        <Input
          placeholder="secure"
          secureTextEntry
          icon={<Profile width={18} height={18} needStrokeColor />}
        />
        <Box width={15} />
        <Unit unit="KG" />
      </Box>
    </Box>
  );
});
