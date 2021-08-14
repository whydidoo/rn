import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Box } from './Box';

storiesOf('Box', module).add('default', () => (
  <Box bg="gray1" width={100} height={100} />
));
