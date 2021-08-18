import { ReactNode } from 'react';
import { PickerSelectProps } from 'react-native-picker-select';

export interface ISelectProps extends Omit<PickerSelectProps, 'placeholder'> {
  icon?: ReactNode;
  placeholder?: string;
}
