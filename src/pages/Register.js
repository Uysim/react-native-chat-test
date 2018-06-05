import React, { Component } from 'react';
import {
  View
} from 'react-native';

import {
  PrimaryButton,
  MainContainer,
  NavigationHeader
} from 'ChatTest/src/components';

import {
  Content,
  Item,
  Input,
  Form,
  Label,
  Footer,
  FooterTab,
  Button,
  Thumbnail,
} from 'native-base';

import { StackActions, NavigationActions } from 'react-navigation';
const defaultProfile = "https://bodiezpro.com/wp-content/uploads/2015/09/medium-default-avatar.png";
export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      birthday: '',
      address: '',
      password: '',
      retypePassword: '',
    }
  }
  goToLogin(){
    const resetStack = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'Login' }),
      ],
    });
    this.props.navigation.dispatch(resetStack);
  }
  render() {
    return (
      <MainContainer>
        <NavigationHeader {...this.props} title='User Detail' />
        <Content>


          <Form style={styles.form}>
            <View style={styles.profileWrapper}>
              <Thumbnail large
                source={{uri: defaultProfile}}
                style={styles.profile}
              />
            </View>
            <Item style={styles.item}>
              <Input
                value={this.state.name}
                placeholder="Name"
                onChangeText={(name)=>this.setState({name})}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                value={this.state.email}
                placeholder="Email"
                onChangeText={(email)=>this.setState({email})}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                value={this.state.birthday}
                placeholder="Birthday (Year - Month - Day)"
                onChangeText={(birthday)=>this.setState({birthday})}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                value={this.state.address}
                placeholder="Address"
                onChangeText={(address)=>this.setState({address})}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                value={this.state.password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                value={this.state.retypePassword}
                placeholder="Re-type Password"
                secureTextEntry={true}
                onChangeText={(retypePassword)=>this.setState({retypePassword})}
              />
            </Item>
          </Form>

        </Content>
        <Footer>
          <FooterTab>
            <PrimaryButton
              onPress={this.goToLogin.bind(this)}
              text='Create Account'
            />
          </FooterTab>
        </Footer>
      </MainContainer>
    );
  }
}

const styles = {
  item: {
    marginTop: 5,
    marginBottom: 5,
  },
  profileWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
  }
}

