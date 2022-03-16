import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const polygonWidth = 8;
export const polygonHeight = 7;

export const Polygon: React.FC = () => {
  return (
    <Svg
      width={polygonWidth}
      height={polygonHeight}
      viewBox="0 0 8 7"
      fill="none">
      <Path
        d="M4.866 6.5a1 1 0 01-1.732 0L.536 2A1 1 0 011.402.5h5.196A1 1 0 017.464 2L4.866 6.5z"
        fill="url(#paint0_linear_864_2290)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_864_2290"
          x1={-0.999999}
          y1={-2}
          x2={12.3279}
          y2={-0.968671}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C58BF2" />
          <Stop offset={1} stopColor="#EEA4CE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
