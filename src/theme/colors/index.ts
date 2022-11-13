import colors from './colors.json';

export type TColor = typeof colors;
export type TColorNames = keyof TColor;

export type ThemeColors =
  | null
  | Array<TColorNames | null | string>
  | TColorNames;
export { colors };
