import React, { useCallback, useRef } from 'react';
import { Pressable, TextInput as RNTextInput } from 'react-native';
import { ITextInputProps } from './types';
import { useState } from 'react';
import Hide from '../Icons/Light/Hide.svg';
import {
  IconHideStyled,
  InputContainerStyled,
  InputIconStyled,
  InputStyled,
} from './styled';
import { useGetColorsByTheme } from '../hooks';

export const Input: React.FC<ITextInputProps> = ({
  icon,
  isSecure,
  value,
  ...props
}) => {
  const [secure, setSecure] = useState(isSecure);
  const passwordInput = useRef<RNTextInput>(null);

  const ComponentSVG = icon;
  const { gray1, gray2 } = useGetColorsByTheme();

  const onPressHide = useCallback(() => setSecure(prev => !prev), []);

  // TODO bug fix value
  // useEffect(() => {
  //   if (isSecure) {
  //     passwordInput.current?.setNativeProps({
  //       style: typographyJson.SmallTextRegular,
  //     });
  //   }
  // }, [isSecure, secure]);

  return (
    <InputContainerStyled>
      {ComponentSVG && (
        <InputIconStyled>
          <ComponentSVG color={gray1} width={24} height={24} />
        </InputIconStyled>
      )}
      <InputStyled
        width="100%"
        placeholderTextColor={gray2}
        color="gray2"
        bg="borderColor"
        borderWidth={1}
        borderColor="borderColor"
        borderRadius={3}
        height={48}
        variant="SmallTextRegular"
        pl={ComponentSVG ? 9 : 3}
        pr={isSecure ? 9 : 3}
        ref={passwordInput}
        secureTextEntry={secure && !!value}
        value={value}
        {...props}
      />
      {isSecure && (
        <IconHideStyled>
          <Pressable onPress={onPressHide}>
            <Hide color={gray2} width={24} height={24} />
          </Pressable>
        </IconHideStyled>
      )}
    </InputContainerStyled>
  );
};
