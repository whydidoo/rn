import React, { useRef, useMemo } from 'react';
import { TextStyle } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { useTheme } from 'styled-components/native';

import { formatIcon } from 'components/utils';

import { ITheme } from '../../theme';
import { useGetColorsByTheme } from '../../theme/hooks';
import { typography } from '../../theme/typography';
import Arrow from '../Icons/Light/Arrow - Down 2.svg';
import { IconStyled, SelectContainerStyled } from './styled';
import { ISelectProps } from './types';

const RenderIcon = () => {
  const { gray2 } = useGetColorsByTheme();

  return <Arrow color={gray2} />;
};

export const Select: React.FC<ISelectProps> = ({
  icon,
  value,
  onValueChange,
  placeholder = '',
  fillPropIcon = 'stroke',
  ...props
}) => {
  const ref = useRef<RNPickerSelect>(null);
  const { gray2, borderColor, gray1 } = useGetColorsByTheme();
  const { radii, space } = useTheme() as ITheme;

  const radius = radii[3];
  const pl = icon ? space[9] : space[3];
  const pr = space[9];
  const paddingDefault = space[3];

  const viewContainer = useMemo(
    () => ({
      backgroundColor: borderColor,
      borderRadius: radius,
      paddingLeft: pl,
      paddingRight: pr,
      height: 48,
    }),
    [borderColor, radius, pl, pr],
  );

  return (
    <SelectContainerStyled>
      {icon && (
        <IconStyled>{formatIcon(icon, 18, fillPropIcon, gray1)}</IconStyled>
      )}
      <RNPickerSelect
        value={value}
        ref={ref}
        onValueChange={onValueChange}
        Icon={RenderIcon as unknown as any} // TODO a libary has trouble having types
        style={{
          inputIOS: viewContainer,
          iconContainer: {
            top: 12,
            right: paddingDefault,
          },
          placeholder: {
            ...(typography.SmallTextRegular as TextStyle),
            color: gray2,
          },
          inputAndroid: viewContainer,
          inputAndroidContainer: {
            flexShrink: 1,
          },
        }}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          value: null,
          label: placeholder,
          color: gray2,
        }}
        {...props}
      />
    </SelectContainerStyled>
  );
};
