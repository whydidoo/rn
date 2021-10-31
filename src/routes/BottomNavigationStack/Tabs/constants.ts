import React from 'react';
import { SvgProps } from 'react-native-svg';

import Activity from '../../../components/Icons/Light/Activity.svg';
import Camera from '../../../components/Icons/Light/Camera.svg';
import Home from '../../../components/Icons/Light/Home.svg';
import Person from '../../../components/Icons/Light/Profile.svg';
import { BottomNavigationStackProps } from '../types';
import { AnimatedActivity } from './IconsSVG/Activity';
import { AnimatedCamera } from './IconsSVG/Camera';
import { AnimatedHome } from './IconsSVG/Home';
import { AnimatedPerson } from './IconsSVG/Person';
import { TBaseAnimatedComponent } from './types';

export const Icons: Record<
  keyof BottomNavigationStackProps,
  { simple: React.FC<SvgProps>; disactive: TBaseAnimatedComponent }
> = {
  Home: {
    simple: Home,
    disactive: AnimatedHome,
  },
  Activity: {
    simple: Activity,
    disactive: AnimatedActivity,
  },
  Camera: {
    simple: Camera,
    disactive: AnimatedCamera,
  },
  Profile: {
    simple: Person,
    disactive: AnimatedPerson,
  },
};
