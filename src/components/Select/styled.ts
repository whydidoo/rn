import { css } from '@styled-system/css';
import styled from 'styled-components/native';

export const SelectContainerStyled = styled.View(
  css({
    position: 'relative',
    flexShrink: 1,
  }),
);

export const IconStyled = styled.View`
  position: absolute;
  z-index: 2;
  width: 24px;
  height: 24px;

  ${css({
    left: 3,
    top: '15px',
  })}
`;
