import React from 'react';
import { GradientBox } from '../GradientBox';
import { ContainerUnitStyled, TextUnitStyled } from './styled';

type TUnitProps = {
  unit: string;
};

export const Unit: React.FC<TUnitProps> = ({ unit }) => {
  return (
    <ContainerUnitStyled>
      <GradientBox
        gradient="purpleLinear"
        borderRadius={3}
        justifyContent="center">
        <TextUnitStyled>{unit}</TextUnitStyled>
      </GradientBox>
    </ContainerUnitStyled>
  );
};
