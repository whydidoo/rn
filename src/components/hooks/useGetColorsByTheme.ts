import { useTheme } from 'styled-components/native';
import { ITheme } from '../../theme';

export const useGetColorsByTheme = () => {
  const { colors } = useTheme() as ITheme;

  return colors;
};
