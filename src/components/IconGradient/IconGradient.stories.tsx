import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { IconGradient } from './IconGradient';
import Profile from '../Icons/Light/Arrow - Right 2.svg';

storiesOf('IconGradient', module).add('default', () => (
  <ScrollView>
    <IconGradient width={70} height={70} gradient="purpleLinear">
      <Profile />
    </IconGradient>
  </ScrollView>
));
