import { useRef, useState } from 'react';
import { LayoutRectangle } from 'react-native';
import Animated from 'react-native-reanimated';
import { parse, Vector } from 'react-native-redash';

import { scaleTime, scaleLinear } from 'd3-scale';
import * as shape from 'd3-shape';

import { generateChartData } from './utils';

const getDomain = (domain: number[]) => [
  Math.min(...domain),
  Math.max(...domain),
];
export interface DataPoint {
  date: number;
  value: number;
}
export const useDataChart = (
  translation: Vector<Animated.SharedValue<number>>,
  layout?: LayoutRectangle,
) => {
  const values = useRef(generateChartData()).current;
  const [position, setPosition] = useState(25);

  const width = layout?.width || 150;
  const stepX = width / (values.length - 1);

  const height = width / 2.1;

  const scaleX = scaleTime()
    .domain(getDomain(values.map(d => d.date)))
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain(getDomain(values.map(d => d.value)))
    .range([height - 50, 50]);

  const fullPath = shape
    .line<DataPoint>()
    .x(p => {
      return scaleX(p.date);
    })
    .y(p => scaleY(p.value))(values) as string;

  const activeLine = shape
    .line<DataPoint>()
    .x(p => scaleX(p.date))
    .y(p => scaleY(p.value))(values.slice(0, position + 1)) as string;

  const heartRateData = values[position];
  const widthActiveLine = (width / values.length) * (position + 1);

  return {
    width,
    height,
    parsePath: parse(fullPath),
    stepX,
    activeLine,
    activeCoverLine: `${activeLine}L ${widthActiveLine} ${height} L 0 ${height}`,
    heartRateData,
    setPosition,
  };
};
