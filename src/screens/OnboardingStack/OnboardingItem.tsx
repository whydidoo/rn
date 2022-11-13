import React, { useMemo } from 'react';
import { Image, useWindowDimensions } from 'react-native';

import { useSafeAreaThemeParams } from 'theme';

import { Box, Text } from 'components';

import { IOrboardingItemProps } from './types';

export const OdboardingItem: React.FC<IOrboardingItemProps> = React.memo(
  ({ sourse, description, title }) => {
    const { left, right } = useSafeAreaThemeParams();
    const { width, height } = useWindowDimensions();
    const c = width / height;

    const StylesFrameImage = useMemo(
      () => ({ width, height: height * c }),
      [c, height, width],
    );

    return (
      <Box width={width}>
        <Image
          source={sourse}
          style={StylesFrameImage}
          resizeMethod="resize"
          resizeMode="stretch"
        />
        <Box px={left} pr={right}>
          <Text variant="H2Bold" mb={15} mt={64}>
            {title}
          </Text>
          <Text variant="MediumTextRegular" color="gray1">
            {description}
          </Text>
        </Box>
      </Box>
    );
  },
);
