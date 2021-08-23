import { TextProps as RNTextProps } from 'react-native';

import { TypographyProps } from 'styled-system';

import { TTextTransfrom, TVariantsText } from '../../theme/typography';
import { IBoxProps } from '../Box/types';

export interface ITextProps extends IBoxProps, TypographyProps, RNTextProps {
  variant?: TVariantsText | TVariantsText[];
  textTransform?: TTextTransfrom;
}
