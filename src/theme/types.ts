import { TColor, ThemeColors } from './colors';
import { TText } from './typography';
import { TBreakpoints } from './breakpoints';
import { BackgroundProps, BorderProps, OpacityProps } from 'styled-system';

export interface ITheme {
  colors: TColor;
  space: number[];
  breakpoints: TBreakpoints<string>;
  radii: number[];
  text: TText;
}

export type TFillProp = 'fill' | 'stroke';

export type TGradient =
  | 'blueLinear'
  | 'purpleLinear'
  | 'caloriesLinear'
  | 'progressBarLinear'
  | 'waterIntakeLinear'
  | 'logoLinear';

type OmitBorderProps = Omit<
  BorderProps,
  | 'borderColor'
  | 'borderTopColor'
  | 'borderBottomColor'
  | 'borderLeftColor'
  | 'borderRightColor'
  | 'borderTop'
  | 'borderBottom'
  | 'borderLeft'
  | 'borderRight'
>;

export interface IThemeBordersProps extends OmitBorderProps {
  borderColor?: ThemeColors;
  borderTopColor?: ThemeColors;
  borderBottomColor?: ThemeColors;
  borderLeftColor?: ThemeColors;
  borderRightColor?: ThemeColors;
}

export interface IThemeColorsProps extends OpacityProps {
  color?: ThemeColors;
  bg?: ThemeColors;
  backgroundColor?: ThemeColors;
}

type OmitBackgroundProps = Omit<BackgroundProps, 'background'>;

export interface IThemeBackgroundProps extends OmitBackgroundProps {
  background?: ThemeColors;
}
