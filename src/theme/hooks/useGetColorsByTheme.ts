import { useTheme } from 'styled-components/native';
import { ITheme } from '..';

export const useGetColorsByTheme = () => {
  const { colors } = useTheme() as ITheme;

  return colors;
};
