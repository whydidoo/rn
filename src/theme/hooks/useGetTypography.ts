import { useTheme } from 'styled-components/native';
import { ITheme } from 'theme';

export const useGetTypography = () => {
  const { text } = useTheme() as ITheme;

  return text;
};
