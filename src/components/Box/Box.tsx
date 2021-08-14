import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {
  background,
  border,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  color,
} from 'styled-system';
import { IBoxProps } from './types';

export const styledBox = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
);

export const Box = styled.View<IBoxProps>(styledBox);

export const AnimatedBox = Animated.createAnimatedComponent(Box);
