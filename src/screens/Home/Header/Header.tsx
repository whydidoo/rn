import React from 'react';

import { Box, Text } from 'components';

import { Notification } from './Notification';

export const Header: React.FC = () => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb={6}>
      <Box>
        <Text variant="SmallTextRegular" color="gray2">
          Welcome Back,
        </Text>
        <Text variant="H4Bold" color="blackColor">
          Stefani Wong
        </Text>
      </Box>
      <Notification />
    </Box>
  );
};
