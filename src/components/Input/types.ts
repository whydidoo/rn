import { ReactNode } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

export interface InputStyledProps {
  withIcon: boolean;
  withHide?: boolean;
}
export interface IInputProps extends RNTextInputProps {
  icon?: ReactNode;
}
