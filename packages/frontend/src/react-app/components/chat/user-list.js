import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import {
  newSocketUser,
  disconnectSocketUser
} from '../../../services/socket-api'

class UserList extends Component {
  constructor(args) {
    super(args)
    this.state = {
      users: []
    }
    newSocketUser((user) => this.setState({
      users: [
        ...this.state.users,
        user
      ]
    }))
    disconnectSocketUser((userId) => this.setState({
      users: this.state.users.filter(user => user.id !== userId)
    }))

  }
  async componentDidMount() {
    const resp = await fetch('/users')
    const data = await resp.json()
    this.setState({ users: data['users'] })
  }
  render() {
    const users = (this.state && this.state.users) || []
    return (
      <div>
        <strong>Online users:</strong>
        <ul>
          {users && users.map(user => {
            if (user.active) return (
              <li key={user.id}>{user.ipAddress}</li>
            )
            if (!user.active) return null
          })}
        </ul>
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    ipAddress: PropTypes.string.isRequired,
    active: PropTypes.bool,
  }))
}
export default UserList