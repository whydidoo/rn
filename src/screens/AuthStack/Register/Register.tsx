import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

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
          onPress={() => navigation.replace('RegisterData')}
        />
        <Box
          alignItems="center"
          justifyContent="center"
          my={4}
          position="relative"
        >
          <Text
            zIndex={2}
            backgroundColor="whiteColor"
            px={2}
            variant="SmallTextRegular"
          >
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
        <Box flexDirection="row" justifyContent="center">
          <Text textAlign="center">Already have an account? </Text>
          <Pressable onPress={() => navigation.replace('Login')}>
            <Text color="purple">Login</Text>
          </Pressable>
        </Box>
      </Box>
    </ViewArea>
  );
};

const style = StyleSheet.create({
  view: {
    justifyContent: 'space-between',
  },
});
