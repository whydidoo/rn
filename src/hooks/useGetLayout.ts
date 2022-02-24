import { useCallback, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

export const useGetLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>();
  const getLayout = useCallback(
    (event: LayoutChangeEvent) => setLayout(event.nativeEvent.layout),
    [],
  );

  return {
    layout,
    getLayout,
  };
};
