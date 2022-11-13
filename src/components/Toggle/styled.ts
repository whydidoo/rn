import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { css } from '@styled-system/css';
import styled from 'styled-components/native';

export const widthToggle = 44;
export const heightToggle = 24;
export const sizeSircle = 14;
export const positionCircle = (heightToggle - sizeSircle) / 2;

export const CircleStyled = styled(View)(
  css({
    width: sizeSircle,
    height: sizeSircle,
    borderRadius: sizeSircle,
    backgroundColor: 'whiteColor',
    top: `${positionCircle}px`,
  }),
);

export const GradientStyled = styled(LinearGradient)(
  css({
    width: 44,
    height: heightToggle,
    position: 'relative',
    borderRadius: 10,
  }),
);
