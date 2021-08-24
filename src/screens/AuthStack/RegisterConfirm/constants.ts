import { Dimensions } from 'react-native';

import img1 from './1.png';
import { ISliderItemProps } from './types';

const { width, height } = Dimensions.get('window');

const COEFFICIENT_HEIGHT = 0.588;
const COEFFICIENT_WIDTH = 0.733;

export const OFFSET_ITEM = 20; // styled-system по теме === 4 example <Box mx={4}/>

export const ITEM_WIDTH = width * COEFFICIENT_WIDTH + OFFSET_ITEM;
export const ITEM_HEIGHT = height * COEFFICIENT_HEIGHT;

export const SPACER_SIZE = (width - ITEM_WIDTH) / 2;

export const SCALE_COEFFICIENT_HEIGHT = 0.7489;

export interface IEmptySliderItem {
  key: string;
}

export const dataRender: Array<ISliderItemProps | IEmptySliderItem> = [
  { key: 'empty-left' },
  {
    title: 'Improve Shape 1',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    img: img1,
  },
  {
    title: 'Improve Shape 2',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    img: img1,
  },
  {
    title: 'Improve Shape 3',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    img: img1,
  },
  {
    title: 'Improve Shape 4',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    img: img1,
  },
  {
    title: 'Improve Shape 5',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    img: img1,
  },
  {
    title: 'Improve Shape 6',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    img: img1,
  },
  { key: 'empty-right' },
];
