import styled from 'styled-components/native';
import { compose, typography } from 'styled-system';
import { styledBox } from '../Box/Box';
import { ITextProps } from './types';

import { variant } from 'styled-system';

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

export const Text = styled.Text<ITextProps>(
  compose(styledBox, typography, textTransform, textVariant),
);
