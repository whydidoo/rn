import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Box,
  DailyAction,
  Gap,
  ProcentBanner,
  Text,
  ViewArea,
} from 'components';
import { WaterIntake } from 'components/Statuses/WaterIntake/WaterIntake';

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

        <Gap size={16} vertical={true} />

        <Box flexDirection="row">
          <WaterIntake
            liters={8}
            data={[
              {
                title: '6am - 8am',
                value: 200,
              },
              {
                title: '9am - 11am',
                value: 400,
              },
              {
                title: '11am - 2pm',
                value: 700,
              },
              {
                title: '2pm - 4pm',
                value: 500,
              },
              {
                title: '6am - 8am',
                value: 700,
              },
              {
                title: '4pm - now',
                value: 100,
              },
            ]}
          />
        </Box>
      </ViewArea>
    </ScrollView>
  );
};
