import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Text } from './Text';

storiesOf('Text', module).add('default', () => (
  <ScrollView>
    <Text variant="H1Bold">Test text H1bold</Text>
    <Text variant="H1Regular">Test text H1Regular</Text>
  </ScrollView>
));
