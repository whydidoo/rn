import React from 'react';
import { SvgProps } from 'react-native-svg';

import { TFillProp } from 'theme';

export const formatIcon = (
  icon: React.ReactNode,
  size: number,
  fillProp?: TFillProp,
  color?: string,
) => {
  const element = icon as React.ReactElement;

  if (fillProp && !color) {
    throw new Error('Укажите цвет свойство замены');
  }

  const props = {
    width: size,
    height: size,
  } as SvgProps;

  if (fillProp) {
    props[fillProp] = color;
  }

  return React.cloneElement(element, props, null);
};
