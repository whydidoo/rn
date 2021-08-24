import React from 'react';
import { StyleSheet } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { Box, Button, Text, ViewArea } from 'components';

import { TAuthStack } from '../types';
import { RegisterForm } from './RegisterForm';
import { Social } from './Social';

type TNavigationParams = StackScreenProps<TAuthStack, 'Register'>;

export const Register: React.FC<TNavigationParams> = ({ navigation }) => {
  return (
    <ViewArea style={style.view}>
      <RegisterForm />
      <Box>
        <Button
          type="primary"
          text="Register"
          onPress={() => navigation.push('RegisterData')}
        />
        <Box
          alignItems="center"
          justifyContent="center"
          my={4}
          position="relative">
          <Text
            zIndex={2}
            backgroundColor="whiteColor"
            px={2}
            variant="SmallTextRegular">
            Or
          </Text>
          <Box
            width="100%"
            height="1px"
            backgroundColor="gray3"
            position="absolute"
          />
        </Box>
        <Social />
        <Text textAlign="center">
          Already have an account? <Text color="purple">Login</Text>
        </Text>
      </Box>
    </ViewArea>
  );
};

const style = StyleSheet.create({
  view: {
    justifyContent: 'space-between',
  },
});
