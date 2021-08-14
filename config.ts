import Config from 'react-native-config';

type TConfig = {
  APPLICATION_ID: 'string';
  BUILD_TYPE: 'string';
  DEBUG: boolean;
  ENV: 'production' | 'development';
  STORYBOOK: string;
  VERSION_CODE: number;
  VERSION_NAME: string;
};

export const env = Config as unknown as TConfig;
