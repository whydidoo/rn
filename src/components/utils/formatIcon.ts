import React from 'react';
import { SvgProps } from 'react-native-svg';

type TColorReplace = { strokeReplace?: string; fillReplace?: string };
type TPropsSVG = {
  needStrokeColor?: boolean;
  needFillColor?: boolean;
};
export const formatIcon = (
  icon: React.ReactNode,
  size: number,
  color?: string,
) => {
  const element = icon as React.ReactElement;

  let { needFillColor, needStrokeColor, fill, stroke } =
    element.props as SvgProps & TPropsSVG;

  if (needFillColor && needStrokeColor) {
    throw new Error('Можно заменять только один параметр');
  }

  if (needFillColor) {
    fill = color;
  }

  if (needStrokeColor) {
    stroke = color;
  }

  return React.cloneElement(
    element,
    {
      width: size,
      height: size,
      fill,
      stroke,
    },
    null,
  );
};
