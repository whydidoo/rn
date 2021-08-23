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
        width={48}
        height={48}
        alignItems="center"
        justifyContent="center">
        <TextUnitStyled>{unit}</TextUnitStyled>
      </GradientBox>
    </ContainerUnitStyled>
  );
};
