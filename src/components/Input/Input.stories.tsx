import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Box } from '../Box';
import ComponentSVG from '../Icons/Light/Profile.svg';
import { Input } from './Input';
import { Select } from './Select';

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

storiesOf('Input', module).add('Input', () => {
  return (
    <Box flex={1} bg="whiteColor" p={4}>
      <Input />
      <Box height={12} width="100%" />
      <Input icon={ComponentSVG} placeholder="Some test here" />
      <Box height={12} width="100%" />
      <Input
        icon={ComponentSVG}
        placeholder="Some test here"
        isSecure
        value="sdfdsf"
      />
      <Box height={12} width="100%" />
      <Input icon={ComponentSVG} placeholder="Without value" isSecure />
      <Box height={12} width="100%" />
      <Select
        onValueChange={() => {}}
        items={sports}
        placeholder="Без иконки"
      />
      <Box height={12} width="100%" />
      <Select
        icon={ComponentSVG}
        onValueChange={() => {}}
        items={sports}
        placeholder="С иконкой "
      />
    </Box>
  );
});
