import { variant } from 'styled-system';
import typography from './typography.json';

export type TVariantsText = keyof typeof typography;

interface ITextVariant {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight?: 'normal' | 'bold' | string;
  letterSpacing?: number;
}

export type TTextTransfrom = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
export type TText = Record<TVariantsText, ITextVariant>;

const textTransform = variant({
  prop: 'textTransform',
  variants: {
    none: {
      textTransform: 'none',
    },
    capitalize: {
      textTransform: 'capitalize',
    },
    uppercase: {
      textTransform: 'uppercase',
    },
    lowercase: {
      textTransform: 'lowercase',
    },
  },
});

const textVariant = variant({ key: 'text' });
export { typography, textTransform, textVariant };
