import { ReactNode } from 'react';

import { TFillProp, TGradient } from 'theme';

export interface IIconGradientProps {
  gradient: TGradient;
  width: number;
  height: number;
  fillProp?: TFillProp;
  children?: ReactNode;
}
