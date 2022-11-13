import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { GradientText, Text } from '../../Text';
import { StatusWrapper } from '../styled';
import SleepGraph from './SleepGraph.png';
import { ISleepProps } from './types';

export const Sleep: React.FC<ISleepProps> = ({ time }) => {
  return (
    <StatusWrapper>
      <Text variant="SmallTextMedium" pb={1}>
        Sleep
      </Text>
      <GradientText variant="MediumTextSemiBold">{time}</GradientText>

      <Image source={SleepGraph} style={style.image} resizeMode="cover" />
    </StatusWrapper>
  );
};

const style = StyleSheet.create({
  image: { width: '100%', height: 75, top: 15 },
});
