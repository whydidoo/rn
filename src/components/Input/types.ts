import { TextInputProps as RNTextInputProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { TypographyProps } from 'styled-system';
import { TVariantsText } from '../../theme/typography';

import { IBoxProps } from '../Box/types';
import { PickerSelectProps } from 'react-native-picker-select';

export interface ISelectProps extends Omit<PickerSelectProps, 'placeholder'> {
  icon?: React.FC<SvgProps>;
  placeholder?: string;
}

export interface ITextInputProps
  extends IBoxProps,
    TypographyProps,
    RNTextInputProps {
  textAlign?: 'left' | 'center' | 'right';
  variant?: TVariantsText | TVariantsText[];
  icon?: React.FC<SvgProps>;
  isSecure?: boolean;
}
