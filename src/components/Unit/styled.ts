import { css } from '@styled-system/css';
import styled from 'styled-components/native';
import { typography } from '../../theme/typography';

export const ContainerUnitStyled = styled.View(
  css({
    alignSelf: 'flex-start',
  }),
);

export const TextUnitStyled = styled.Text(
  css(typography.SmallTextMedium),
  css({
    p: 3,
    color: 'whiteColor',
  }),
);
