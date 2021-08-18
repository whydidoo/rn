import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { IInputProps } from './types';
import { useState } from 'react';
import Hide from '../Icons/Bold/Hide.svg';
import Show from '../Icons/Bold/Show.svg';

import {
  IconHideStyled,
  IconStyled,
  InputContainerStyled,
  TextInputStyled,
} from './styled';
import { useGetColorsByTheme } from 'theme';
import { formatIcon } from '../utils';

export const Input: React.FC<IInputProps> = ({
  icon,
  secureTextEntry,
  ...props
}) => {
  const [show, setShow] = useState(secureTextEntry);
  const onPress = useCallback(() => setShow(value => !value), []);
  const { gray2, gray1 } = useGetColorsByTheme();

  return (
    <InputContainerStyled>
      {icon && <IconStyled>{formatIcon(icon, 18, gray1)}</IconStyled>}
      <TextInputStyled
        {...props}
        secureTextEntry={show}
        placeholderTextColor={gray2}
        withHide={secureTextEntry}
        withIcon={!!icon}
      />
      {secureTextEntry && (
        <IconHideStyled>
          <Pressable onPress={onPress}>
            {show ? (
              <Hide width={18} height={18} fill={gray1} />
            ) : (
              <Show width={18} height={18} fill={gray1} />
            )}
          </Pressable>
        </IconHideStyled>
      )}
    </InputContainerStyled>
  );
};
