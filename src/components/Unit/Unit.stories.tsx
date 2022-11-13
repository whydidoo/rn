import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Box } from '../Box';
import { Gap } from '../Gap';
import { Input } from '../Input';
import { Unit } from './Unit';

storiesOf('Unit', module)
  .add('KG', () => <Unit unit="KG" />)
  .add('With INPUT', () => (
    <Box p={5} flex={1} bg="whiteColor">
      <Box flexDirection="row">
        <Input />
        <Gap size={15} />
        <Unit unit="KG" />
      </Box>
    </Box>
  ));
