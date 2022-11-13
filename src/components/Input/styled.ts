import { View } from 'react-native';
import { TextInput } from 'react-native';

import css from '@styled-system/css';
import styled from 'styled-components/native';
import { typography } from 'theme/typography';

import { InputStyledProps } from './types';

export const InputContainerStyled = styled(View)(
  css({
    position: 'relative',
    flexShrink: 1,
    width: '100%',
    justifyContent: 'center',
  }),
);

export const IconStyled = styled(View)(
  css({
    position: 'absolute',
    left: 3,
    zIndex: 2,
  }),
);

export const IconHideStyled = styled(View)(
  css({
    position: 'absolute',
    right: 3,
    zIndex: 2,
  }),
);

export const TextInputStyled = styled(TextInput)<InputStyledProps>(
  css({
    backgroundColor: 'borderColor',
    borderColor: 'borderColor',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    color: 'gray2',
    ...typography.SmallTextRegular,
    height: 48,
    py: 0,
  }),
  ({ withIcon, withHide }) =>
    css({
      pl: withIcon ? 8 : 3,
      pr: withHide ? 8 : 3,
    }),
);
