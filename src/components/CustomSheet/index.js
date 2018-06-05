import React, { Component } from 'react';
import FadeInView from './FadeInView';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

export default class CustomSheet extends Component {
  render(){
    return <FadeInView visible={this.props.modalVisible} backgroundColor={this.props.backgroundColor}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.props.onCancel}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.container} onPress={this.props.onCancel}></TouchableOpacity>
          {this.props.children}
        </View>
      </Modal>
    </FadeInView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    paddingBottom: 0,
    justifyContent: "flex-end"
  }
});

CustomSheet.defaultProps = {
  modalVisible: false,
  onCancel: ()=>{}
};

