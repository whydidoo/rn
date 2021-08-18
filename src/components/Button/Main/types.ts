import React from 'react';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

export type TTypeButton = 'primary' | 'secondary';

export interface IButtonProps extends GenericTouchableProps {
  type?: 'primary' | 'secondary';
  text?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}
