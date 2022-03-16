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
import { getThemeGradient, TGradient, useGetTypography } from 'theme';

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

  const x1 = params.start?.x ? `${params.start.x * 100}%` : '0';
  const y1 = params.start?.y ? `${params.start.y * 100}%` : '0';
  const x2 = params.end?.x ? `${params.end.x * 100}%` : '100%';
  const y2 = params.end?.y ? `${params.end.x * 100}%` : '100%';

  console.log(layout?.width);
  return (
    <>
      {!layout ? (
        <Text onLayout={getLayout} variant={variant}>
          {children}
        </Text>
      ) : null}
      <Svg height={textParams.fontSize} width={layout?.width}>
        <Defs>
          <LinearGradient id="grad" x1={x1} y1={y1} x2={x2} y2={y2}>
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
