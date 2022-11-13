import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';

import { useGetColorsByTheme } from 'theme';

import { formatIcon } from '../../utils';
import {
  ButtonStyled,
  GradientStyled,
  IconLeftStyled,
  IconRightStyled,
  TextStyled,
} from './styled';
import { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = ({
  type = 'primary',
  iconLeft,
  iconRight,
  text,
  fillIconRightProp = 'stroke',
  fillIconLeftProp = 'stroke',
  ...props
}) => {
  const { whiteColor } = useGetColorsByTheme();
  const styleContainer: ViewStyle = useMemo(
    () => ({
      alignSelf: type === 'secondary' ? 'flex-start' : undefined,
    }),
    [type],
  );

  if (type === 'secondary' && (iconLeft || iconRight)) {
    throw new Error(
      'Нельзя использовать компонент props.type === "secondary" c iconLeft или iconRight',
    );
  }

  return (
    <ButtonStyled
      type={type}
      containerStyle={styleContainer}
      activeOpacity={0.8}
      {...props}>
      <GradientStyled
        type={type}
        gradient={type === 'primary' ? 'blueLinear' : 'purpleLinear'}>
        {iconLeft && (
          <IconLeftStyled>
            {formatIcon(iconLeft, 20, fillIconLeftProp, whiteColor)}
          </IconLeftStyled>
        )}
        {text ? <TextStyled type={type}>{text}</TextStyled> : null}
        {iconRight && (
          <IconRightStyled>
            {formatIcon(iconRight, 20, fillIconRightProp, whiteColor)}
          </IconRightStyled>
        )}
      </GradientStyled>
    </ButtonStyled>
  );
};
