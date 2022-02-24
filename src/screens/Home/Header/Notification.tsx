import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useGetColorsByTheme } from 'theme';

import { Box } from 'components';

import Bell from '../../../components/Icons/Light/Notification.svg';

export const Notification: React.FC = () => {
  const { blackColor } = useGetColorsByTheme();
  const [isActive] = useState(true);

  return (
    <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
      <Box
        bg="borderColor"
        width={40}
        height={40}
        alignItems="center"
        justifyContent="center"
        position="relative"
        borderRadius={2}>
        <Bell stroke={blackColor} width={24} height={24} />
        {isActive ? (
          <Box
            border="2px solid"
            borderColor="whiteColor"
            bg="danger"
            position="absolute"
            borderRadius="50"
            left="20px"
            top="7px"
            p="3px"
          />
        ) : null}
      </Box>
    </TouchableOpacity>
  );
};
