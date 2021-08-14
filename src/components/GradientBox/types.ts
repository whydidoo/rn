import { LinearGradientProps } from 'react-native-linear-gradient';
import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from 'styled-system';
import { IThemeBordersProps } from '../../theme';

export type TGradient =
  | 'blueLinear'
  | 'purpleLinear'
  | 'caloriesLinear'
  | 'progressBarLinear'
  | 'waterIntakeLinear'
  | 'logoLinear';

export interface IGradientBoxProps
  extends Omit<LinearGradientProps, 'colors'>,
    IThemeBordersProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {
  gradient?: TGradient;
  colors?: (string | number)[];
}
