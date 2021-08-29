import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Gap, Input, Text } from 'components';

import Lock from '../../../components/Icons/Light/Lock.svg';
import Message from '../../../components/Icons/Light/Message.svg';

export const LoginForm: React.FC = () => {
  return (
    <Box>
      <Box alignItems="center" mb={6}>
        <Text variant="LargeTextRegular">Hey there,</Text>
        <Text variant="H4Bold">Welcome Back</Text>
      </Box>
      <Box>
        <Input icon={<Message />} placeholder="Email" />
        <Gap size={15} vertical />
        <Input icon={<Lock />} secureTextEntry placeholder="Password" />
        <Gap size={10} vertical />
        <Text color="gray2" textAlign="center" style={styles.textUnderline}>
          Forgot your password?
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  textUnderline: { textDecorationLine: 'underline' },
});
