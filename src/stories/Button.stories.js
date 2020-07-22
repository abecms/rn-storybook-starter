import React from 'react';
import {Text, View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import CenterView from '../../storybook/stories/CenterView';
import {ThemeProvider} from '../utils/ThemeProvider';
import {theme} from '../utils/theme';

import {Button} from '../components/Button/index.js';
import {MyText} from '../components/MyText';

import Feather from 'react-native-vector-icons/Feather';

const Separator = () => <View style={{marginTop: 10}}></View>;

storiesOf('Button', module)
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
      <Button
        onPress={action('clicked-emoji')}
        round
        disabled
        length="short"
        width="xlarge"
        size="small">
        Commander
      </Button>
      <Separator />
      <Button
        onPress={action('clicked-emoji')}
        round
        length="short"
        width="xlarge"
        size="small">
        Commander
      </Button>
      <Separator />
      <View style={{backgroundColor: '#CBCBCB', height: 100, paddingTop: 25, paddingHorizontal: 50}}>
        <Button
          icon={<Feather name="user" size={24} color="white" />}
          onPress={action('clicked-emoji')}
          round
          length="short"
          width="xlarge"
          size="small"
          outline
          transparent>
          Commander
        </Button>
      </View>
      <Separator />
      <Button
        onPress={action('clicked-emoji')}
        round
        outline
        length="short"
        width="xlarge"
        size="small">
        Commander
      </Button>
      <Separator />
      <Button
        onPress={action('clicked-emoji')}
        round
        loading
        length="short"
        width="xlarge"
        size="small">
        Commander
      </Button>
      <Separator />
      <Button
        icon={<Feather name="user" size={24} color="white" />}
        onPress={action('clicked-emoji')}
        round
        length="short"
        width="xlarge"
        size="small">
        Commander
      </Button>
      <Separator />
      <View style={{backgroundColor: '#CBCBCB', height: 100, paddingTop: 25, paddingHorizontal: 50}}>
        <Button
          icon={<Feather name="user" size={24} color="white" />}
          onPress={action('clicked-emoji')}
          round
          length="short"
          width="xlarge"
          size="small"
          outline
          transparent>
          Commander
        </Button>
      </View>
      <Separator />
      <Button
        icon={<Feather name="user" size={24} color="white" />}
        onPress={action('clicked-emoji')}
        round>
      </Button>
    </>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>😀 😎 👍 💯</Button>
  ))
  .add('with some text', () => <MyText />);
