import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { storiesOf } from '@storybook/react-native';

import Profile from '../Icons/Light/Arrow - Right 2.svg';
import { IconGradient } from './IconGradient';

storiesOf('IconGradient', module).add('default', () => (
  <ScrollView>
    <IconGradient width={70} height={70} gradient="purpleLinear">
      <Profile />
    </IconGradient>
  </ScrollView>
));
