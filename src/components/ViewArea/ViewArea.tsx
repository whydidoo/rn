import React, { useMemo } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

import { useGetColorsByTheme, useSafeAreaThemeParams } from 'theme';

export const ViewArea: React.FC<ViewProps> = ({
  children,
  style,
  ...props
}) => {
  const { bottom, left, right, top } = useSafeAreaThemeParams();
  const { whiteColor } = useGetColorsByTheme();
  const styles: StyleProp<ViewStyle> = useMemo(() => {
    return {
      paddingLeft: left,
      paddingRight: right,
      paddingBottom: bottom,
      paddingTop: top,
      flex: 1,
      backgroundColor: whiteColor,
    };
  }, [bottom, left, right, top, whiteColor]);

  return (
    <View style={[styles, style]} {...props}>
      {children}
    </View>
  );
};
