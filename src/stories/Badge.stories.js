import React from 'react';
import {Text, View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import CenterView from '../../storybook/stories/CenterView';
import {ThemeProvider} from '../utils/ThemeProvider';
import {theme} from '../utils/theme';

import {Badge} from '../components/Badge/index.js';

import Feather from 'react-native-vector-icons/Feather';

const Separator = () => <View style={{marginTop: 10}}></View>;

storiesOf('Badge', module)
  .addDecorator((Story) => (
    <ThemeProvider value={theme}>
      <CenterView>
        <Story />
      </CenterView>
    </ThemeProvider>
  ))
  //    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <>
      <Badge
        size="xxlarge"
        onPress={action('pressed')}
      >
      10000
      </Badge>
      <Separator />
      <Badge
        size="xxlarge"
        onPress={action('pressed')}
      >
      10000
      </Badge>
    </>
  ))
