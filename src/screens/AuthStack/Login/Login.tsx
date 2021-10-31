import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { TMaintStack } from 'routes/MainStack';

import { Box, Button, Text, ViewArea } from 'components';

import Enter from '../../../components/Icons/Bold/Login.svg';
import { TAuthStack } from '../types';
import { LoginForm } from './LoginForm';
import { Social } from './Social';

type TNavigationParams = StackScreenProps<TAuthStack & TMaintStack, 'Login'>;

export const Login: React.FC<TNavigationParams> = ({ navigation }) => {
  return (
    <ViewArea style={style.view}>
      <LoginForm />
      <Box>
        <Button
          type="primary"
          iconLeft={<Enter />}
          fillIconLeftProp="fill"
          text="Login"
          onPress={() => {
            navigation.replace('Home');
          }}
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

        <Box flexDirection="row" justifyContent="center">
          <Text textAlign="center">Don’t have an account yet? </Text>
          <Pressable onPress={() => navigation.replace('Register')}>
            <Text color="purple">Register</Text>
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
