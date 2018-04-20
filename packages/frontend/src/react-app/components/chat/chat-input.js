import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  onEnter = (e) => {
    if (e.keyCode === 13) {
      this.props.sendMessage()
    }
  }
  onEdit = (e) => {
    this.props.onEditMessage(e.target.value)
  }
  render() {
    return ([
      <input
        type="text"
        onChange={this.onEdit}
        value={this.props.message}
        onKeyDown={this.onEnter}
      />,
      <button
        onClick={this.props.sendMessage}
      >
        Submit
      </button>
    ])
  }

}
ChatInput.propTypes = {
  message: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
  onEditMessage: PropTypes.func.isRequired,
}
export default ChatInput