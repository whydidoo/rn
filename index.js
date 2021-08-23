/**
 * @format
 */
import { AppRegistry } from 'react-native';

import { configure } from '@storybook/react-native';

import { App } from './App';
import { name as appName } from './app.json';
import { env } from './config';
import { StorybookUIRoot } from './storybook';
import { loadStories } from './storybook/storyLoader';

console.disableYellowBox = true;

if (env.STORYBOOK) {
  // import stories
  configure(() => {
    loadStories();
  }, module);

  AppRegistry.registerComponent(appName, () => StorybookUIRoot);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
