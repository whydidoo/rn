import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import css, { SystemStyleObject } from '@styled-system/css';
import styled from 'styled-components/native';
import { variant } from 'styled-system';

import typography from '../../../theme/typography/typography.json';
import { GradientBox } from '../../GradientBox';
import { IButtonProps, TTypeButton } from './types';

const widthVariants: Record<TTypeButton, SystemStyleObject> = {
  primary: {
    width: '100%',
  },
  secondary: {},
};

export const ButtonStyled = styled(TouchableOpacity)<IButtonProps>(
  css({
    borderRadius: '8px',
  }),
  variant({
    prop: 'type',
    variants: widthVariants,
  }),
);

const gradientVariants: Record<TTypeButton, SystemStyleObject> = {
  primary: {
    p: 4,
    borderRadius: '99px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    py: 2,
    px: 5,
    borderRadius: 10,
  },
};

export const GradientStyled = styled(GradientBox)<Pick<IButtonProps, 'type'>>(
  variant({
    prop: 'type',
    variants: gradientVariants,
  }),
);

const textVariants: Record<TTypeButton, SystemStyleObject> = {
  primary: typography.LargeTextBold,
  secondary: typography.CaptionBold,
};

export const TextStyled = styled(Text)<Pick<IButtonProps, 'type'>>(
  variant({
    prop: 'type',
    variants: textVariants,
  }),
  css({
    color: 'whiteColor',
  }),
);

export const IconLeftStyled = styled(View)(
  css({
    mr: 2,
  }),
);

export const IconRightStyled = styled(View)(
  css({
    ml: '3px',
  }),
);
