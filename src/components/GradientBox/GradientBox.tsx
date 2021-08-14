import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {
  border,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
} from 'styled-system';
import { IGradientBoxProps } from './types';
import { getThemeGradient } from './utils';

export const styledProps = compose(
  border,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
);

const GradientBoxStyled =
  styled(LinearGradient)<IGradientBoxProps>(styledProps);

export class GradientBox extends React.Component<IGradientBoxProps> {
  render() {
    const { colors, children, gradient, ...props } = this.props;

    if (!colors && !gradient) {
      throw new Error(
        'Необходимо передать colors или gradient в GradientBox! ',
      );
    }

    if (colors && gradient) {
      throw new Error(
        'Необходимо передать только colors или только gradient в GradientBox! ',
      );
    }

    let params = { colors } as any;

    if (gradient) {
      params = getThemeGradient(gradient)!;
    }

    return (
      <GradientBoxStyled {...params} {...props}>
        {children}
      </GradientBoxStyled>
    );
  }
}

export const AnimatedGradientBox =
  Animated.createAnimatedComponent(GradientBox);
