import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { DailyAction, Gap, ProcentBanner, Text, ViewArea } from 'components';

import { Header } from './Header';
import { HeartRateBar } from './HeartRateBar';

export const Home: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ViewArea>
        <Header />

        <ProcentBanner
          title="BMI (Body Mass Index)"
          subtitle="You have a normal weight"
        />

        <Gap size={32} vertical={true} />

        <DailyAction text="Compare my Photo" />

        <Gap size={30} vertical={true} />

        <Text variant="LargeTextSemiBold" color="blackColor" mb={3}>
          Activity Status
        </Text>

        <HeartRateBar />
      </ViewArea>
    </ScrollView>
  );
};
