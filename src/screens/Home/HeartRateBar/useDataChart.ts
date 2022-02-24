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
interface DataPoint {
  date: number;
  value: number;
}
export const useDataChart = (
  translation: Vector<Animated.SharedValue<number>>,
  layout?: LayoutRectangle,
) => {
  const [activeIndex, setActiveIndex] = useState(23);
  const values = useRef(generateChartData()).current;

  const width = layout?.width || 150;
  const height = width / 2.1;
  const heartRateData = values[activeIndex];
  const widthActiveLine = (width / values.length) * activeIndex + 1;

  const scaleX = scaleTime()
    .domain(getDomain(values.map(d => d.date)))
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain(getDomain(values.map(d => d.value)))
    .range([height - 50, 50]);

  const activeLine = shape
    .line<DataPoint>()
    .x(p => scaleX(p.date))
    .y(p => scaleY(p.value))(values.slice(0, activeIndex + 1)) as string;

  const passivePath = shape
    .line<DataPoint>()
    .x(p => scaleX(p.date))
    .y(p => scaleY(p.value))(values.slice(activeIndex)) as string;

  const fullPath = shape
    .line<DataPoint>()
    .x(p => scaleX(p.date))
    .y(p => scaleY(p.value))(values) as string;

  return {
    width,
    height,
    heartRateData,
    activeCoverLine: `${activeLine}L ${widthActiveLine} ${height} L 0 ${height}`,
    activeLine,
    passivePath,
    parsePath: parse(fullPath),
    activeIndex,
    setActiveIndex,
  };
};
