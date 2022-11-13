import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Box } from './Box';

storiesOf('Box', module).add('default', () => (
  <Box bg="gray1" width={100} height={100} />
));
