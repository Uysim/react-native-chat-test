import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  View
} from 'react-native';

const ChatBotLogo = require('ChatTest/src/assets/ChatBotLogo.png');

export default class ChatLogo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          {...this.props}
          source={ChatBotLogo}
          style={[styles.image, this.props.style]}
        />
      </View>
    );
  }
}


const styles = {
  image: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }

}
