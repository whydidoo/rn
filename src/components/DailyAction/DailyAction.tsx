import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getThemeGradient } from 'theme';

import { GradientBox } from '../GradientBox';
import { Text } from '../Text';
import { DailyActionStyled } from './styled';
import { IDailyActionProps } from './types';

export const DailyAction: React.FC<IDailyActionProps> = ({
  text,
  onPressButton,
}) => {
  const gradient = getThemeGradient('blueLinear')!;

  return (
    <DailyActionStyled
      colors={['rgba(157, 206, 255, 0.3)', 'rgba(146, 163, 253, 0.3)']}
      start={gradient.start}
      end={gradient.end}>
      <Text variant="MediumTextMedium" color="blackColor">
        {text}
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onPressButton}>
        <GradientBox gradient="blueLinear" px={3} py={1} borderRadius={3}>
          <Text variant="CaptionRegular" color="whiteColor">
            Compare
          </Text>
        </GradientBox>
      </TouchableOpacity>
    </DailyActionStyled>
  );
};
