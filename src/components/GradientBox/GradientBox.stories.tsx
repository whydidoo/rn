import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { GradientBox } from './GradientBox';

storiesOf('GradientBox', module).add('default', () => (
  <ScrollView>
    <GradientBox colors={['#000', '#fff']} width={250} height={100} />
    <GradientBox gradient="logoLinear" width={250} height={100} />
    <GradientBox gradient="waterIntakeLinear" width={250} height={100} />
    <GradientBox gradient="progressBarLinear" width={250} height={100} />
    <GradientBox gradient="caloriesLinear" width={250} height={100} />
    <GradientBox gradient="purpleLinear" width={250} height={100} />
    <GradientBox gradient="blueLinear" width={250} height={100} />
  </ScrollView>
));
