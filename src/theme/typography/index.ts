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
export { typography };
