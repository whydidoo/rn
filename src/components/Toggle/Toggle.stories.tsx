import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { storiesOf } from '@storybook/react-native';

import { Toggle } from './Toggle';

storiesOf('Toggle', module).add('default', () => (
  <ScrollView>
    <Toggle
      value={false}
      onChange={value => {
        console.log(value, 'test');
      }}
    />
  </ScrollView>
));
