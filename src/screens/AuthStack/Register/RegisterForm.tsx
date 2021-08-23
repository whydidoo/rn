import React from 'react';

import { Box, Gap, Input, Text } from 'components';

import Lock from '../../../components/Icons/Light/Lock.svg';
import Message from '../../../components/Icons/Light/Message.svg';
import Profile from '../../../components/Icons/Light/Profile.svg';

export const RegisterForm: React.FC = () => {
  return (
    <Box>
      <Box alignItems="center" mb={6}>
        <Text variant="LargeTextRegular">Hey there,</Text>
        <Text variant="H4Bold">Create an Account</Text>
      </Box>
      <Box>
        <Input icon={<Profile />} placeholder="First Name" />
        <Gap size={15} vertical />
        <Input icon={<Profile />} placeholder="Last Name" />
        <Gap size={15} vertical />
        <Input icon={<Message />} placeholder="Email" />
        <Gap size={15} vertical />
        <Input icon={<Lock />} secureTextEntry placeholder="Password" />
        <Gap size={10} vertical />
        <Text color="gray2" textAlign="left">
          By continuing you accept our Privacy Policy and Term of Use
        </Text>
      </Box>
    </Box>
  );
};
