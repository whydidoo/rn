import { Dimensions } from 'react-native';

import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import { ISliderItemProps } from './types';

const { width } = Dimensions.get('window');

const COEFFICIENT_WIDTH = 0.733;

export const OFFSET_ITEM = 20; // styled-system по теме === 4 example <Box mx={4}/>
export const ITEM_WIDTH = width * COEFFICIENT_WIDTH + OFFSET_ITEM;
export const SPACER_SIZE = (width - ITEM_WIDTH) / 2;
export const SCALE_COEFFICIENT_HEIGHT = 0.7489;

export interface IEmptySliderItem {
  key: string;
}

export const dataRender: Array<ISliderItemProps | IEmptySliderItem> = [
  { key: 'empty-left' },
  {
    title: 'Improve Shape',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    img: img1,
  },
  {
    title: 'Lean & Tone',
    description:
      'I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way',
    img: img2,
  },
  {
    title: 'Lose a Fat',
    description:
      'I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass',
    img: img3,
  },
  { key: 'empty-right' },
];
