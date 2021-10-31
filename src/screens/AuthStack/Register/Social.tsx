import React from 'react';
import { Image } from 'react-native';

import { Box } from 'components';

import Facebook from './facebook.png';
import Google from './google.png';

export const Social: React.FC = () => {
  const images = [Google, Facebook];

  return (
    <Box flexDirection="row" justifyContent="center" mb={6}>
      {images.map((img, idx) => {
        return (
          <Box
            key={idx}
            width={50}
            height={50}
            borderRadius={3}
            borderWidth={1}
            alignItems="center"
            justifyContent="center"
            marginRight={idx % 2 === 0 ? 6 : 0}
            borderColor="gray3">
            <Image source={img} />
          </Box>
        );
      })}
    </Box>
  );
};
