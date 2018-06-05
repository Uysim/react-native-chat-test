import React, { Component } from 'react';

import {
  Container
} from 'native-base';

import {
  PRIMARY_COLOR
} from 'ChatTest/src/constants/colors';

const styles = {

  backgroundColor: 'white'
}
export default class MainContainer extends Component {
  render() {
    return (
      <Container {...this.props} style={[this.props.style, styles]}>
        {this.props.children}
      </Container>
    );
  }
}

