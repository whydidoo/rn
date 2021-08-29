import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

import { Box, Button, Text, ViewArea } from 'components';

import People from './people.png';
export const RegisterSuccess: React.FC = () => {
  return (
    <ViewArea style={styles.container}>
      <Box alignItems="center" mt="60px">
        <Image source={People} />

        <Text variant="H4Bold" mt={9}>
          Welcome, Stefani
        </Text>
        <Text
          variant="SmallTextRegular"
          color="gray1"
          textAlign="center"
          maxWidth={214}>
          You are all set now, let’s reach your goals together with us
        </Text>
      </Box>
      <Box flex={1} />
      <Box>
        <Button type="primary" text="Go To Home" />
      </Box>
    </ViewArea>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
});
