import React, { useMemo } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { useSafeAreaThemeParams } from 'theme';

import { Box, Button, Text, ViewArea } from 'components';

import Arrow from '../../../components/Icons/Light/Arrow - Right 2.svg';
import { TAuthStack } from '../types';
import Girl from './girl.png';
import { RegisterDataForm } from './RegisterDataForm';

type TNavigationParams = StackScreenProps<TAuthStack, 'RegisterData'>;

export const RegisterData: React.FC<TNavigationParams> = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const { isLowScreen, bottom } = useSafeAreaThemeParams();

  const heigthImgLowScreen = height / 3;
  const widthImgLowScreen = width / 2;

  const styleImg = useMemo(() => {
    if (isLowScreen) {
      return {
        height: isLowScreen ? heigthImgLowScreen : width,
        width: isLowScreen ? widthImgLowScreen : height * 0.4,
      };
    }
  }, [height, heigthImgLowScreen, isLowScreen, width, widthImgLowScreen]);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      keyboardVerticalOffset={Platform.select({
        ios: -bottom / 2,
        android: 0,
      })}
      behavior={Platform.select({
        ios: 'padding',
        android: undefined,
      })}>
      <ViewArea style={styles.container}>
        <Pressable style={styles.inner} onPress={Keyboard.dismiss}>
          <Box justifyContent="flex-start">
            <Box alignItems="center">
              <Image source={Girl} resizeMode="contain" style={styleImg} />
            </Box>
            <Box alignItems="center">
              <Text variant="H4Bold">Let’s complete your profile</Text>
              <Text variant="SmallTextRegular" color="gray2">
                It will help us to know more about you!
              </Text>
            </Box>
          </Box>
          <Box>
            <RegisterDataForm />
            <Button
              type="primary"
              text="Next"
              onPress={() => {
                navigation.replace('RegisterConfirm');
              }}
              iconRight={<Arrow />}
            />
          </Box>
        </Pressable>
      </ViewArea>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  inner: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
