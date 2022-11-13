import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Box } from '../Box';
import Profile from '../Icons/Bold/Profile.svg';
import { Select } from '../Select';

const sports = [
  {
    label:
      'Football Football FootballFootball Football Football Football FootballFootball Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

storiesOf('Select', module).add('default', () => {
  return (
    <Box flex={1} bg="whiteColor" p={4}>
      <Select placeholder="test" items={sports} onValueChange={() => {}} />
      <Box height={15} />
      <Select
        placeholder="With Icon"
        items={sports}
        onValueChange={() => {}}
        icon={<Profile stroke="#fff" />}
      />
    </Box>
  );
});
