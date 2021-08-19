import { ReactNode } from 'react';
import { PickerSelectProps } from 'react-native-picker-select';
import { TFillProp } from 'theme';

export interface ISelectProps extends Omit<PickerSelectProps, 'placeholder'> {
  icon?: ReactNode;
  placeholder?: string;
  fillPropIcon?: TFillProp;
}
