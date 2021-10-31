import React, { useState } from 'react';

import { Box, Gap, Text, Toggle } from 'components';

interface ISearchItemProps {
  text: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  isLast: boolean;
}

export const SearchItem: React.FC<ISearchItemProps> = ({ text, isLast }) => {
  const [status, setStatus] = useState(false);
  return (
    <Box flexDirection="row" alignItems="center" mb={!isLast ? 1 : 0}>
      <Toggle value={status} onChange={setStatus} />
      <Gap size={15} />
      <Text variant="LargeTextMedium">{text}</Text>
    </Box>
  );
};
