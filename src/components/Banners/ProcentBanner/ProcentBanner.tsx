import React from 'react';
import { StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Svg, {
  Circle,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  Text as TextSvg,
} from 'react-native-svg';

import * as d3 from 'd3';
import { useGetLayout } from 'hooks';
import { getThemeGradient, useGetColorsByTheme } from 'theme';

import { Box } from '../../Box';
import { Button } from '../../Button';
import { Text } from '../../Text';
import { ProcentBannerGradient } from './styles';
import { IProcentBannerProps } from './types';

const animationStartPosition = [
  [109, 12],
  [132, 106],
  [167, 22],
  [175, 127],
];

const radius = 4;
const fill = '#fff';
const opacity = 0.2;

export const ProcentBanner: React.FC<IProcentBannerProps> = ({
  title,
  subtitle,
  onPressButton,
}) => {
  const { layout, getLayout } = useGetLayout();
  const paramsGradient = getThemeGradient('blueLinear')!;
  const { whiteColor } = useGetColorsByTheme();
  const {
    colors: [startColorChart, endColorChart],
  } = getThemeGradient('purpleLinear')!;

  const canvasWidth = layout?.width || 0;

  const arc = d3.arc().cornerRadius(5);
  const procent = 20.1;

  const path = arc({
    innerRadius: 0,
    outerRadius: 53,
    startAngle: 0,
    endAngle: ((Math.PI * 2) / 100) * procent,
  })!;

  return (
    <Shadow style={style.viewStyle} startColor="#95aefe32">
      <ProcentBannerGradient
        {...paramsGradient}
        onLayout={getLayout}
        style={style.container}>
        <Svg width={layout?.width} height={layout?.height} style={style.svg}>
          <Circle cx="10" cy="136" r="25" fill="#fff" opacity={0.2} />
          <Circle
            cx={canvasWidth - 15}
            cy="125"
            r="25"
            fill="#fff"
            opacity={0.2}
          />

          {animationStartPosition.map(([cx, cy], key) => {
            return (
              <Circle
                cx={cx}
                cy={cy}
                key={key}
                r={radius}
                fill={fill}
                opacity={opacity}
              />
            );
          })}
        </Svg>
        <Box flex={1} px={4} py={5} flexDirection="row">
          <Box flex={1}>
            <Text variant="MediumTextSemiBold" color="whiteColor">
              {title}
            </Text>
            <Text variant="SmallTextRegular" color="whiteColor" mb={3}>
              {subtitle}
            </Text>
            <Button type="secondary" text="View More" onPress={onPressButton} />
          </Box>
          <Svg width={106} height={106}>
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
                <Stop offset="0" stopColor={startColorChart} />
                <Stop offset="1" stopColor={endColorChart} />
              </LinearGradient>
            </Defs>

            <Circle cx={53} cy={53} r={44} fill={fill} />
            <G translateX={53} translateY={53}>
              <Path strokeLinecap="round" d={path} fill="url(#grad)" />
              <TextSvg
                fill={whiteColor}
                translateY={-20}
                translateX={7}
                fontWeight="bold"
                fontSize={12}>
                {procent}
              </TextSvg>
            </G>
          </Svg>
        </Box>
      </ProcentBannerGradient>
    </Shadow>
  );
};

const style = StyleSheet.create({
  svg: {
    position: 'absolute',
  },
  container: {
    borderRadius: 22,
  },
  viewStyle: {
    height: 146,
    width: '100%',
    overflow: 'hidden',
  },
});
