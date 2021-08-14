import styled from 'styled-components/native';
import { compose, typography } from 'styled-system';
import { ITextInputProps } from './types';
import { styledBox } from '../Box/Box';
import { textVariant } from '../../theme/typography';

export const InputStyled = styled.TextInput<ITextInputProps>(
  compose(styledBox, typography, textVariant),
);

export const InputContainerStyled = styled.View`
  position: relative;
`;

export const InputIconStyled = styled.View`
  position: absolute;
  z-index: 2;
  width: 24px;
  height: 24px;
  top: 12;
  left: 15;
`;

export const IconHideStyled = styled.View`
  position: absolute;
  z-index: 2;
  width: 24px;
  height: 24px;
  top: 12;
  right: 15;
`;
