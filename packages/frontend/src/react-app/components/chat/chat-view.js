import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatView extends Component {
  render() {
    const {messages} = this.props;
    return (
      <div>
        {messages.map(message => (
        <div key={message.text}>
          {`from: ${message.sender} message: ${message.text}`}
        </div>))}
      </div>
    )
  }

}
ChatView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired
}
export default ChatView