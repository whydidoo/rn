import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useGetColorsByTheme } from '../hooks';
import { useRef } from 'react';
import { useMemo } from 'react';
import { useTheme } from 'styled-components/native';
import { ITheme } from '../../theme';
import Arrow from '../Icons/Light/Arrow - Down 2.svg';
import textJSON from '../../theme/typography/typography.json';
import { InputContainerStyled, InputIconStyled } from './styled';
import { ISelectProps } from './types';

export const Select: React.FC<ISelectProps> = ({
  icon,
  value,
  onValueChange,
  placeholder = '',
  ...props
}) => {
  const ref = useRef<RNPickerSelect>(null);
  const { gray2, borderColor, gray1 } = useGetColorsByTheme();
  const { radii, space } = useTheme() as ITheme;
  const ComponentSVG = icon;

  const radius = radii[3];
  const pl = ComponentSVG ? space[9] : space[3];

  const viewContainer = useMemo(
    () => ({
      backgroundColor: borderColor,
      borderRadius: radius,
      height: 48,
      paddingLeft: pl,
    }),
    [borderColor, radius, pl],
  );

  return (
    <InputContainerStyled>
      {ComponentSVG && (
        <InputIconStyled>
          <ComponentSVG color={gray1} width={24} height={24} />
        </InputIconStyled>
      )}
      <RNPickerSelect
        value={value}
        ref={ref}
        onValueChange={onValueChange}
        Icon={() => <Arrow color={gray2} />}
        style={{
          inputIOS: viewContainer,
          iconContainer: {
            top: 12,
            right: 15,
          },
          placeholder: { ...(textJSON.SmallTextRegular as any), color: gray1 },
          inputAndroid: viewContainer,
        }}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          value: null,
          label: placeholder,
        }}
        {...props}
      />
    </InputContainerStyled>
  );
};
