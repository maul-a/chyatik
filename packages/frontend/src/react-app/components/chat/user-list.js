import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class UserList extends Component {
  constructor(args) {
    super(args)
    this.state = {
      users: []
    }
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
          {users && users.map(user => (
            <li key={user.id}>{user.ipAddress}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserList