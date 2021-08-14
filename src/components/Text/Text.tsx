import styled from 'styled-components/native';
import { compose, typography } from 'styled-system';
import { styledBox } from '../Box/Box';
import { ITextProps } from './types';

import { textTransform, textVariant } from '../../theme/typography';

export const Text = styled.Text<ITextProps>(
  compose(styledBox, typography, textTransform, textVariant),
);
