

import React, { Component } from 'react';
import {
  Text,
  Image,
  Dimensions
} from 'react-native';

import {
  Footer,
  Content,
  FooterTab,
  Button,
  H2,
  H1
} from 'native-base';

import {
  PrimaryButton,
  MainContainer,
  ChatLogo,
  CustomSheet,
  SecondaryButton,
  BoldText
} from 'ChatTest/src/components';


export default class Home extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      gettingStart: false
    }
  }

  hideSheet(){
    this.setState({gettingStart: false})
  }

  showSheet(){
    this.setState({gettingStart: true})
  }

  goToLogin(){
    this.hideSheet();
    this.props.navigation.navigate('Login')
  }

  goToRegister(){
    this.hideSheet();
    this.props.navigation.navigate('Register')
  }
  render() {
    return (
      <MainContainer>
        <Content>
          <ChatLogo style={styles.logo}/>
          <H2 style={styles.title}>
            Manage . Plan . Orgaize
          </H2>
          <H1 style={styles.title}>
            Anywhere
          </H1>
        </Content>
        <Footer>
          <FooterTab>
            <PrimaryButton
              onPress={()=>this.showSheet()}
              text='Get Start'
            />
          </FooterTab>
        </Footer>
        <CustomSheet
          onCancel={()=>this.hideSheet()}
          modalVisible={this.state.gettingStart}>
          <PrimaryButton
            full
            large
            onPress={this.goToLogin.bind(this)}
            text='Login'
          />
          <SecondaryButton
            full
            large
            onPress={this.goToRegister.bind(this)}
            text='Register'
          />
          <Button
            large light full onPress={()=>this.hideSheet()}>
            <BoldText> Cancel </BoldText>
          </Button>
        </CustomSheet>
      </MainContainer>
    );
  }
}

const styles = {
  title: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    marginTop: 120,
    marginBottom: 50
  }
}
