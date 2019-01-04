import React, { Component } from 'react'
import { eraseCookie } from '../../ProtectedRoute';

class Protected extends Component {
logout() {
    eraseCookie('authorization')
    this.props.history.push('/')
}
render() {
    return (
      <div>
        Protected page!
        <br />
        <button onClick={() => this.logout()}>Logout</button>
      </div>
    );
  }
}
export default Protected;