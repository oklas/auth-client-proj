import React from 'react'
import { compose } from 'recompose'
import withAuth from './withAuth'
import { logoutRedirectUrl } from '../consts'
import logo from '../media/logo-blue.png'

class Logout extends React.Component {
  async componentDidUpdate() {
    const { auth, history } = this.props
    try {
      const authenticated = await auth.isAuthenticated()
      if( authenticated ) {
        auth.logout(logoutRedirectUrl)
      } else {
        history.push(logoutRedirectUrl)
      }
    } catch(e) {
      history.push(logoutRedirectUrl)
    }
    history.push(logoutRedirectUrl)
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}>
        <img
          src={logo}
          style={{
            display: 'inline-block',
            margin: '0 auto',
            widh: 'auto',
            height: 50,
          }}
        />
      </div>
    )
  }
}

export default withAuth(Logout)