import React, { Component } from 'react';
import {
  GiftedChat,
  Bubble,
  MessageText,
  Time
} from 'react-native-gifted-chat'
import {
  Container,
  Icon,
  Button,
  Toast,
} from 'native-base';

import {
  MainContainer,
  NavigationHeader
} from 'ChatTest/src/components';

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR
} from 'ChatTest/src/constants/colors';

export default class ChatRoom extends Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    const user = {
      _id: 2,
      name: 'Bot',
      avatar: 'https://www.tm-town.com/assets/default_female300x300-af1ea9327d6293733a8874dbd97ce49e.png',
    }
    const messages = [
      {
        _id: 2,
        text: 'If you have any questions just say help',
        createdAt: new Date(),
        user: user,
      },
      {
        _id: 1,
        text: 'Hello welcome',
        createdAt: new Date(),
        user: user,
      }
    ]
    this.setState({messages})
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }


  renderBubble(bubbleProps){
    return <Bubble {...bubbleProps} wrapperStyle={wrapperStyle}/>
  }

  renderMessageText(props){
    return <MessageText {...props} customTextStyle={{color: 'white'}} />
  }

  renderTime(props){
    return null;
  }
  renderHeaderLeft(){
    return <Button transparent onPress={()=> Toast.show({
      text: 'Just testing mode',
      buttonText: 'Okay'
    })}>
      <Icon style={styles.headerIcon} name='apps' />
    </Button>
  }

  renderHeaderRight(){
    return <Button transparent onPress={()=> Toast.show({
      text: 'Just testing mode',
      buttonText: 'Okay'
    })}>
      <Icon style={styles.headerIcon} name='notifications' />
    </Button>
  }

  renderNavigator(){
    return <NavigationHeader
      customRight={this.renderHeaderRight.bind(this)}
      customLeft={this.renderHeaderLeft.bind(this)}
    />
  }

  render() {
    return (
      <MainContainer style={{flex: 1}}>
        {this.renderNavigator()}
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          renderBubble={this.renderBubble.bind(this)}
          renderMessageText={this.renderMessageText.bind(this)}
          renderTime={this.renderTime.bind(this)}
          user={{
            _id: 1,
          }}
        />
      </MainContainer>
    )
  }
}

const wrapperStyle = {
  left: {backgroundColor: PRIMARY_COLOR},
  right: {backgroundColor: SECONDARY_COLOR},
}

const styles = {
  headerIcon: {
    color: '#298089',
  }
}



