import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import { Root } from 'native-base';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import ChatRoom from './src/pages/ChatRoom';

import Register from './src/pages/Register';

const AppNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  ChatRoom: {
    screen: ChatRoom
  },
  Register: {
    screen: Register
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});


export default () =>(
  <Root>
    <AppNavigator />
  </Root>
)
