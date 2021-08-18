import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from './Main/Button';
import Login from '../Icons/Bold/Login.svg';
import User from '../Icons/Light/2 User.svg';
import { ButtonCircle } from './ButtonCircle';
import { Box } from '../Box';
import { Gap } from '../Gap';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button
      type="primary"
      text="sdfsdfsd"
      iconLeft={<Login width={24} height={24} needFillColor />}
      iconRight={<User width={24} height={24} needStrokeColor />}
    />
  ))
  .add('Secondary', () => <Button type="secondary" text="sdfsdfsd" />)
  .add('ButtonCircle', () => (
    <Box bg="whiteColor" px={5} flex={1} flexDirection="row">
      <ButtonCircle
        type="ordinary"
        icon={<User width={24} height={24} needStrokeColor />}
      />

      <Gap size={20} />
      <ButtonCircle
        type="progress"
        progressValue={75}
        icon={<User needStrokeColor />}
      />
    </Box>
  ));
