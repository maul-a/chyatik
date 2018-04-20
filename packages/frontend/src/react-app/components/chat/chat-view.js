import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ChatView = ({messages}) => (
  <div>
    {console.log(messages)}
    {messages.map(message => (
      <div key={message.id}>
        {`from: ${message.ipAddress} message: ${message.text}`}
      </div>))}
  </div>
)
ChatView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    ipAddress: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired
}
export default ChatView