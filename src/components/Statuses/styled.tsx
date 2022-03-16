import React from 'react';
import { StyleSheet } from 'react-native';

import css from '@styled-system/css';
import styled from 'styled-components/native';

const ContainerStatusStyled = styled.View(
  css({
    p: 4,
    backgroundColor: 'whiteColor',
    borderRadius: 4,
  }),
);

export const StatusWrapper: React.FC = ({ children }) => {
  return (
    <ContainerStatusStyled style={style.shadow}>
      {children}
    </ContainerStatusStyled>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
