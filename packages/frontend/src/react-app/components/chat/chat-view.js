import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ChatView = ({messages}) => (
  <div>
    {messages.map(message => (
      <div key={message.sender}>
        {`from: ${message.sender} message: ${message.text}`}
      </div>))}
  </div>
)
ChatView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired
}
export default ChatView