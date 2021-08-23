import React, { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Box, ButtonCircle } from 'components';

import Icon from '../../components/Icons/Light/Arrow - Right 2.svg';
import { OnboardingContext } from './context';
import { frames } from './frames/data';
import { OdboardingItem } from './OnboardingItem';

export const Onboarding: React.FC = () => {
  const { width } = useWindowDimensions();
  const [value, setValue] = useState(25);
  const ref = useRef<ScrollView>(null);
  const { setCompleteOnboarding } = useContext(OnboardingContext);

  const onPressButton = useCallback(() => {
    setValue(oldValue => {
      if (oldValue === 100) {
        setCompleteOnboarding();
        return oldValue;
      }

      ref.current?.scrollTo({ x: (oldValue / 25) * width, animated: true });

      return oldValue + 25;
    });
  }, [setCompleteOnboarding, width]);

  return (
    <Box flex={1} backgroundColor="whiteColor">
      <ScrollView
        ref={ref}
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        decelerationRate="fast"
        bounces={false}
        scrollEventThrottle={1}
        horizontal>
        {frames.map((item, idx) => (
          <OdboardingItem {...item} key={idx} />
        ))}
      </ScrollView>

      <Box position="absolute" bottom={40} right={30}>
        <ButtonCircle
          icon={<Icon />}
          progressValue={value}
          type="progress"
          onPress={onPressButton}
        />
      </Box>
    </Box>
  );
};
