import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Box } from '../Box';
import { Gap } from '../Gap';
import Login from '../Icons/Bold/Login.svg';
import User from '../Icons/Light/2 User.svg';
import { ButtonCircle } from './ButtonCircle';
import { Button } from './Main/Button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button
      type="primary"
      text="sdfsdfsd"
      iconLeft={<Login width={24} height={24} />}
      iconRight={<User width={24} height={24} />}
      fillIconLeftProp="fill"
    />
  ))
  .add('Secondary', () => <Button type="secondary" text="sdfsdfsd" />)
  .add('ButtonCircle', () => (
    <Box bg="whiteColor" px={5} flex={1} flexDirection="row">
      <ButtonCircle type="ordinary" icon={<User width={24} height={24} />} />

      <Gap size={20} />
      <ButtonCircle type="progress" progressValue={75} icon={<User />} />
    </Box>
  ));
