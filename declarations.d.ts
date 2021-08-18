declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      needStrokeColor?: boolean;
      needFillColor?: boolean;
    }
  >;
  export default content;
}
