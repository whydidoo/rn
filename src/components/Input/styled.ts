import css from '@styled-system/css';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { typography } from 'theme/typography';
import { InputStyledProps } from './types';

export const InputContainerStyled = styled(View)(
  css({
    position: 'relative',
    flexShrink: 1,
    width: '100%',
  }),
);

export const IconStyled = styled(View)(
  css({
    position: 'absolute',
    top: '15px',
    left: 3,
    zIndex: 2,
  }),
);

export const IconHideStyled = styled(View)(
  css({
    position: 'absolute',
    top: '15px',
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
  }),
  ({ withIcon, withHide }) =>
    css({
      pl: withIcon ? 8 : 3,
      pr: withHide ? 8 : 3,
    }),
);
