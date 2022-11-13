import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import css from '@styled-system/css';
import styled from 'styled-components/native';

const ContainerStatusStyled = styled.View(
  css({
    p: 4,
    backgroundColor: 'whiteColor',
    borderRadius: 4,
    width: '100%',
  }),
);

export const StatusWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContainerStatusStyled style={style.shadow}>
      {children}
    </ContainerStatusStyled>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,

    elevation: 9,
  },
});
