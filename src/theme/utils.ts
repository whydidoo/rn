import { LinearGradientProps } from 'react-native-linear-gradient';

import { TGradient } from './types';

export const getThemeGradient = (
  gradientName: TGradient,
): Pick<
  LinearGradientProps,
  'start' | 'locations' | 'colors' | 'end'
> | null => {
  switch (gradientName) {
    case 'blueLinear':
      return {
        colors: ['#9DCEFF', '#92A3FD'],
        start: { x: 0, y: 1 },
        end: { x: 1, y: 1 },
      };
    case 'purpleLinear':
      return {
        colors: ['#EEA4CE', '#C58BF2'],
        start: { x: 0, y: 1 },
        end: { x: 1, y: 1 },
      };
    case 'caloriesLinear':
      return {
        colors: ['#C58BF2', '#B4C0FE'],
      };
    case 'progressBarLinear':
      return {
        colors: ['#92A3FD', '#C58BF2'],
        start: { x: 0, y: 1 },
        end: { x: 1, y: 1 },
      };

    case 'waterIntakeLinear':
      return {
        colors: ['#C58BF2', '#B4C0FE'],
      };
    case 'logoLinear':
    default:
      return {
        colors: ['#9DCEFF', '#CC8FED'],
        start: { x: 0, y: 1 },
        end: { x: 1, y: 1 },
      };
  }
};
