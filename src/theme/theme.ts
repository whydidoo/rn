import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { ITheme } from './types';
import { typography } from './typography';

let genArr = new Array(12).fill(1);
let step = 4;

let space = genArr.map((_, index) => index * step);
let radii = genArr.map((_, index) => index * step);

export const theme: ITheme = {
  colors,
  space,
  breakpoints,
  radii,
  text: typography,
};
