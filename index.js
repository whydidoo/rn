/**
 * @format
 */
import { AppRegistry, Platform } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { env } from './config';
import { StorybookUIRoot } from './storybook';
import { configure } from '@storybook/react-native';
import { loadStories } from './storybook/storyLoader';

console.disableYellowBox = true;

if (env.STORYBOOK || Platform.OS === 'ios') {
  // import stories
  configure(() => {
    loadStories();
  }, module);

  AppRegistry.registerComponent(appName, () => StorybookUIRoot);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
