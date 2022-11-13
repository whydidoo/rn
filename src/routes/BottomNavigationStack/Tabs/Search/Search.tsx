import React, { useCallback, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Box, ButtonCircle } from 'components';

import SeacrhIcon from '../../../../components/Icons/Light/Search.svg';
import { SearchItem } from './SearchItem';

export const Search: React.FC = () => {
  const [show, setShow] = useState(false);

  const showMemo = useCallback(() => setShow(value => !value), []);

  return (
    <>
      {show && (
        <Box
          position="absolute"
          left={0}
          right={0}
          alignItems="center"
          bottom="100px">
          <Box
            px={3}
            py={4}
            style={styles.container}
            borderRadius={2}
            backgroundColor="whiteColor">
            {['Workout Tracker', 'Meal Planner', 'Sleep Tracker'].map(
              (item, idx, arr) => (
                <SearchItem
                  text={item}
                  key={item}
                  isLast={idx === arr.length - 1}
                />
              ),
            )}
          </Box>
        </Box>
      )}

      <Box position="relative" top="-20px" alignItems="center">
        <ButtonCircle
          onPress={showMemo}
          type="ordinary"
          icon={<SeacrhIcon width={24} height={24} />}
          gradient="blueLinear"
        />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 40,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
