import React, { ReactElement } from 'react';
import { useMemo } from 'react';
import { Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

import { getThemeGradient } from 'theme';

import { ContainerStyled } from './styled';
import { IIconGradientProps } from './types';

export const IconGradient: React.FC<IIconGradientProps> = ({
  children,
  gradient,
  width,
  height,
  fillProp = 'stroke',
}) => {
  const {
    start,
    colors: [startColor, endColor],
    end,
  } = getThemeGradient(gradient)!;

  const { x, y } = start || { x: 0, y: 0 };
  const { x: x1, y: y1 } = end || { x: 0, y: 0 };

  const childGradient = useMemo(() => {
    return (
      <Defs>
        <LinearGradient
          id="grad"
          x1={`${x * 100}%`}
          y1={`${y * 100}%`}
          x2={`${x1 * 100}%`}
          y2={`${y1 * 100}%`}>
          <Stop offset="0" stopColor={startColor} />
          <Stop offset="1" stopColor={endColor} />
        </LinearGradient>
      </Defs>
    );
  }, [endColor, startColor, x, x1, y, y1]);

  const makeIcon = useMemo(
    () =>
      React.Children.map(children, child => {
        const elem = child as ReactElement;
        let { stroke, fill } = elem.props as SvgProps;
        const color = 'url(#grad)';

        return React.cloneElement(
          elem,
          {
            fill,
            stroke,
            width,
            height,
            [fillProp]: color,
          },
          childGradient,
        );
      }),
    [children, width, height, fillProp, childGradient],
  );

  return <ContainerStyled>{makeIcon}</ContainerStyled>;
};
