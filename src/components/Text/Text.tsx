import styled from 'styled-components/native';
import { compose, typography } from 'styled-system';

import { textTransform, textVariant } from '../../theme/typography';
import { styledBox } from '../Box/Box';
import { ITextProps } from './types';

export const Text = styled.Text<ITextProps>(
  compose(styledBox, typography, textTransform, textVariant),
);
