import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import {
  newSocketMessage,
  sendSocketMessage,
  getUserOwnId
} from '../../../services/socket-api'
import ChatView from './chat-view'
import ChatInput from './chat-input'
import UserList from "./user-list";

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      message: '',
      userId: null,
      ipAddress: null,
    }
    newSocketMessage((message) => {
      const { messages } = this.state;
      const lastMessageId = messages[messages.length - 1].id
      this.setState({
        messages: [
          ...messages, {
          id: (lastMessageId + 1) ? lastMessageId + 1 : 0,
          text: message.text,
          ipAddress: this.state.ipAddress,
        }]
      })
    })
    getUserOwnId(({ userId, ipAddress }) => this.setState({ userId, ipAddress }))
  }
  async componentDidMount() {
    const resp = await fetch('/messages')
    const data = await resp.json()
    this.setState({ messages: data['messages'] || [] })
  }
  onEditMessage = (message) => this.setState({ message })
  sendMessage = () => {
    const { message, userId } = this.state
    this.setState({ message: '' })
    const body = { text: message, userId }
    fetch('/messages', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      }
    })
    const { messages, ipAddress } = this.state
    const lastMessageId = (messages[messages.length - 1].id) || 0
    this.setState({
      messages: [
        ...messages, {
          id: (lastMessageId + 1) ? lastMessageId + 1 : 0,
          text: message,
          ipAddress,
        }

    ]})
    sendSocketMessage(message)
  }
  render() {
    return ([
      <UserList/>,
      <ChatView
        messages={this.state.messages}
      />,
      <ChatInput
        onEditMessage={this.onEditMessage}
        sendMessage={this.sendMessage}
        message={this.state.message}
      />
    ])
  }

}
export default Chat