import React, {Component} from 'react'
import {newSocketMessage, sendSocketMessage} from '../../services/socket-api'

class Root extends Component {
  constructor(props) {
    super(props)
    newSocketMessage((message) => this.setState({message}))
  }
  onEditMessage = (e) => this.setState({message: e.target.value})
  onEnter = (e) => {
    if (e.keyCode === 13) {
      this.sendMessage()
    }
  }
  sendMessage = () => {
    const { message } = this.state
    this.setState({message: ''})
    sendSocketMessage(message)
  }
  render() {
    const message = (this.state && this.state.message) || ''
    return (
      <div>
        <input
          type="text"
          onChange={this.onEditMessage}
          value={message}
          onKeyDown={this.onEnter}
        />
        <button
          onClick={this.sendMessage}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default Root