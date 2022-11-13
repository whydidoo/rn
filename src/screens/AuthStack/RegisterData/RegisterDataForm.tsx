import React from 'react';

import { Box, Gap, Input, Select, Unit } from 'components';

import Users from '../../../components/Icons/Light/2 User.svg';
import Activity from '../../../components/Icons/Light/Activity.svg';
import Date from '../../../components/Icons/Light/Calendar.svg';
import Swap from '../../../components/Icons/Light/Swap.svg';

export const RegisterDataForm: React.FC = () => {
  return (
    <Box mb={6}>
      <Select
        placeholder="Choose Gender"
        value={null}
        items={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
        icon={<Users />}
        onValueChange={() => {}}
      />
      <Gap vertical size={15} />

      <Input icon={<Date />} placeholder="Date of Birth" />
      <Gap vertical size={15} />

      <Box flexDirection="row">
        <Input
          icon={<Activity />}
          keyboardType="numeric"
          placeholder="Your Weight"
        />
        <Gap size={15} />
        <Unit unit="KG" />
      </Box>
      <Gap vertical size={15} />
      <Box flexDirection="row">
        <Input
          icon={<Swap />}
          keyboardType="numeric"
          placeholder="Your Height"
        />
        <Gap size={15} />
        <Unit unit="CM" />
      </Box>
    </Box>
  );
};
