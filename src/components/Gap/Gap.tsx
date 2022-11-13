import React from 'react';

import { Box } from '../Box';

export const Gap: React.FC<{ vertical?: boolean; size: number }> = ({
  vertical,
  size,
}) => {
  const props = { [vertical ? 'height' : 'width']: size };
  return <Box {...props} />;
};
