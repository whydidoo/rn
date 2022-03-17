import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as TextSVG,
} from 'react-native-svg';

import { useGetLayout } from 'hooks';
import styled from 'styled-components/native';
import { compose, typography } from 'styled-system';
import {
  getLinearCoordinates,
  getThemeGradient,
  TGradient,
  useGetTypography,
} from 'theme';

import {
  textTransform,
  textVariant,
  TVariantsText,
} from '../../theme/typography';
import { styledBox } from '../Box/Box';
import { ITextProps } from './types';

export const Text = styled.Text<ITextProps>(
  compose(styledBox, typography, textTransform, textVariant),
);

interface IGradientTextProps {
  gradient?: TGradient;
  variant?: TVariantsText;
}

export const GradientText: React.FC<IGradientTextProps> = ({
  children,
  variant = 'MediumTextRegular',
  gradient = 'blueLinear',
}) => {
  const params = getThemeGradient(gradient)!;
  const textParams = useGetTypography()[variant];
  const { getLayout, layout } = useGetLayout();

  const linersCoordinates = getLinearCoordinates(params);

  return (
    <>
      {!layout ? (
        <Text onLayout={getLayout} variant={variant}>
          {children}
        </Text>
      ) : null}
      <Svg height={textParams.fontSize} width={layout?.width}>
        <Defs>
          <LinearGradient id="grad" {...linersCoordinates}>
            <Stop offset="0" stopColor={params.colors[0]} />
            <Stop offset="1" stopColor={params.colors[1]} />
          </LinearGradient>
        </Defs>

        <TextSVG
          {...textParams}
          fill="url(#grad)"
          translateY={textParams.fontSize}>
          {children}
        </TextSVG>
      </Svg>
    </>
  );
};
