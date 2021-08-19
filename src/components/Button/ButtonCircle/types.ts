import { ReactNode } from 'react';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { TFillProp } from 'theme';

export type TButtonCircle = 'progress' | 'ordinary';

export interface IButtonCircleProps extends GenericTouchableProps {
  type?: TButtonCircle;
  icon: ReactNode;
  progressValue?: 25 | 50 | 75 | 100;
  fillIconProp?: TFillProp;
}
