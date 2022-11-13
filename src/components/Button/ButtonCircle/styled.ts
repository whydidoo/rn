import { TouchableOpacity } from 'react-native-gesture-handler';

import css, { SystemStyleObject } from '@styled-system/css';
import styled from 'styled-components/native';
import { variant } from 'styled-system';

import { GradientBox } from '../../GradientBox';
import { IButtonCircleProps, TButtonCircle } from './types';

export const ButtonStyled = styled(TouchableOpacity)<
  Pick<IButtonCircleProps, 'type'>
>(
  css({
    borderRadius: '8px',
  }),
);

const gradientVariants: Record<TButtonCircle, SystemStyleObject> = {
  ordinary: {
    p: 4,
  },
  progress: {
    width: '50px',
    height: '50px',
    top: '5px',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const GradientStyled = styled(GradientBox)<
  Pick<IButtonCircleProps, 'type'>
>(
  variant({
    prop: 'type',
    variants: gradientVariants,
  }),
  css({
    borderRadius: 100,
  }),
);
