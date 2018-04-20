import React, { Component } from 'react'
import {newSocketMessage, sendSocketMessage} from '../../../services/socket-api'
import ChatView from './chat-view'
import ChatInput from './chat-input'

class Chat extends Component {
  constructor(props) {
    super(props)
    newSocketMessage((message) => this.setState({message}))
  }
  onEditMessage = (message) => this.setState({message})
  sendMessage = () => {
    const { message } = this.state
    this.setState({message: ''})
    sendSocketMessage(message)
  }
  render() {
    return ([
      <ChatView
        messages={[{'sender': 'me', 'text': 'hello world'}]}
      />,
      <ChatInput
        onEditMessage={this.onEditMessage}
        sendMessage={this.sendMessage}
        message={(this.state && this.state.message) || ''}
      />
    ])
  }

}
export default Chat