import React, { Component } from 'react';

import {
  Content,
  Item,
  Input,
  Form,
  Label,
  Footer,
  FooterTab,
  Button,
} from 'native-base';

import {
  Text,
} from 'react-native';

import {
  PRIMARY_COLOR
} from 'ChatTest/src/constants/colors';

import {
  PrimaryButton,
  MainContainer,
  ChatLogo,
  NavigationHeader
} from 'ChatTest/src/components';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  login(){
    const { email, password } = this.state;
    if(email == '' || password == ''){
      alert('Email or Password can not be blank')
    }else{
      this.props.navigation.navigate('ChatRoom')
    }

  }

  handleChangeEmail(email){
    this.setState({email: email})
  }


  handleChangePassword(password){
    this.setState({password: password})
  }
  render() {
    return (
      <MainContainer>
        <NavigationHeader {...this.props} title='' />
        <Content>
          <ChatLogo style={styles.logo}/>
          <Form>
            <Item>
              <Input
                value={this.state.email}
                placeholder="Email"
                onChangeText={this.handleChangeEmail.bind(this)}
              />
            </Item>
            <Item>
              <Input
                value={this.state.password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={this.handleChangePassword.bind(this)}
              />
            </Item>
          </Form>

        </Content>
        <Footer>
          <FooterTab>
            <PrimaryButton
              onPress={this.login.bind(this)}
              text='Login'
            />
          </FooterTab>
        </Footer>
      </MainContainer>
    );
  }
}

const styles = {
  logo: {
    marginTop: 100,
    marginBottom: 50,
  }
}

