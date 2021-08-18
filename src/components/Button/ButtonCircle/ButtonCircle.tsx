import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { useGetColorsByTheme } from 'theme';
import { formatIcon } from '../../utils';
import { Circle } from './Circle';
import { ButtonStyled, GradientStyled } from './styled';
import { IButtonCircleProps } from './types';

export const ButtonCircle: React.FC<IButtonCircleProps> = ({
  type = 'ordinary',
  icon,
  progressValue,
  ...props
}) => {
  const styleContainer: ViewStyle = useMemo(
    () => ({
      alignSelf: 'flex-start',
      position: 'relative',
    }),
    [],
  );

  const { whiteColor } = useGetColorsByTheme();

  const sizeIcon = type === 'ordinary' ? 24 : 18;

  const iconFormat = formatIcon(icon, sizeIcon, whiteColor);

  const withCircle = type === 'progress' && progressValue;

  return (
    <ButtonStyled
      type={type}
      {...props}
      containerStyle={styleContainer}
      activeOpacity={0.8}>
      <GradientStyled
        type={type}
        gradient={type === 'ordinary' ? 'purpleLinear' : 'blueLinear'}>
        {iconFormat}
      </GradientStyled>
      {withCircle && <Circle progress={progressValue!} />}
    </ButtonStyled>
  );
};
