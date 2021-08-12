import colors from './colors.json';

export type TColorsTheme = keyof typeof colors;
export type ThemeColors = null | Array<TColorsTheme | null> | TColorsTheme;
export { colors };
