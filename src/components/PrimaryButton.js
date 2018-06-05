import React, { Component } from 'react';

import {
  Button
} from 'native-base';
import {
  PRIMARY_COLOR
} from 'ChatTest/src/constants/colors';
import BoldText from './BoldText'

const styles = {
  button: {
    backgroundColor: PRIMARY_COLOR,
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
}
export default class PrimaryButton extends Component {
  render() {
    return (
      <Button {...this.props} style={[this.props.style, styles.button]}>
        <BoldText text={this.props.text} style={styles.text} />
      </Button>
    );
  }
}

