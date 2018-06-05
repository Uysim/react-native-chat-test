import React, { Component } from 'react';
import {
  Header,
  Title,
  Body,
  Icon,
  Left,
  Right,
  Button,
} from 'native-base';

export default class NavigationHeader extends Component {
  renderLeft(){
    if(this.props.customLeft){
      return this.props.customLeft()
    }else{
      return <Button transparent onPress={()=>this.props.navigation.goBack()}>
        <Icon style={styles.headerIcon} name='arrow-back' />
      </Button>
    }
  }

  renderTitle(){
    if(this.props.title != null && this.props.title != undefined){
      return <Title style={styles.headerTitle}>
        {this.props.title}
      </Title>
    }else{
      return <Title style={styles.headerTitle}>
          Hello Tabitha
      </Title>
    }
  }

  renderRight(){
    if(this.props.customRight){
      return this.props.customRight();
    }else{
      return null
    }
  }

  render(){
    return <Header style={styles.header}>
      <Left style={styles.left}>
        {this.renderLeft()}
      </Left>
      <Body style={styles.body}>
        {this.renderTitle()}
      </Body>
      <Right style={styles.right}>
        {this.renderRight()}
      </Right>
    </Header>
  }
}


const styles = {
  header: { backgroundColor: 'transparent', elevation: 0 },
  left: { flex: 1 },
  right: { flex: 1 },
  body: { flex: 1 },
  headerTitle: {
    textAlign: 'center',
    color: '#298089',
  },
  headerIcon: {
    color: '#298089',
  }
}
