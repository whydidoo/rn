import { ReactNode } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { TFillProp } from 'theme';

export interface InputStyledProps {
  withIcon: boolean;
  withHide?: boolean;
}
export interface IInputProps extends RNTextInputProps {
  icon?: ReactNode;
  fillPropIcon?: TFillProp;
}
