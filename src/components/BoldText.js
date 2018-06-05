import React, { Component } from 'react';
import {
  Text
} from 'react-native';


export default class BoldText extends Component {
  render() {
    return <Text {...this.props} style={[{fontWeight: 'bold'}, this.props.style]}>
      {this.props.text || this.props.children}
    </Text>;
  }
}

