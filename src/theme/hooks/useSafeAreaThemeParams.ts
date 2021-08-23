import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const lowSizeScreen = 700;
const isLowScreen = Dimensions.get('window').height < lowSizeScreen;
const horizontalThemePx = isLowScreen ? 15 : 30;
const verticalThemePx = isLowScreen ? 20 : 40;

export const useSafeAreaThemeParams = () => {
  const { bottom, left, right, top } = useSafeAreaInsets();

  return {
    bottom: bottom <= verticalThemePx ? verticalThemePx : bottom,
    left: left + horizontalThemePx,
    right: horizontalThemePx + right,
    top: top <= verticalThemePx ? verticalThemePx : top,
    isLowScreen,
  };
};
