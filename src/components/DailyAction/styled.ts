import LinearGradient from 'react-native-linear-gradient';

import css from '@styled-system/css';
import styled from 'styled-components/native';

export const DailyActionStyled = styled(LinearGradient)(
  css({
    p: 4,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
);
