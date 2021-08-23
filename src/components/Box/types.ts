import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from 'styled-system';

import {
  IThemeBackgroundProps,
  IThemeBordersProps,
  IThemeColorsProps,
} from '../../theme';

export interface IBoxProps
  extends IThemeBackgroundProps,
    IThemeBordersProps,
    IThemeColorsProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}
