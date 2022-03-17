import { LinearGradientProps } from 'react-native-linear-gradient';

import { TGradient } from './types';

export const getThemeGradient = (
  gradientName: TGradient,
): Pick<LinearGradientProps, 'start' | 'locations' | 'colors' | 'end'> => {
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

type TParams = ReturnType<typeof getThemeGradient>;

export const getLinearCoordinates = (params: TParams) => {
  const x1 = params.start?.x ? `${params.start.x * 100}%` : '0';
  const y1 = params.start?.y ? `${params.start.y * 100}%` : '0';
  const x2 = params.end?.x ? `${params.end.x * 100}%` : '100%';
  const y2 = params.end?.y ? `${params.end.x * 100}%` : '100%';

  return { x1, y1, x2, y2 };
};
