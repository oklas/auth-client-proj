import React from 'react'
import { withAuth as withOctaAuth } from '@okta/okta-react';

const withAuth = restricted => Component => {
  class WithAuth extends React.Component {
    state = {}

    async checkAuthentication() {
      try {
        const authenticated = await this.props.auth.isAuthenticated()
        if (authenticated !== this.state.authenticated) {
          if (authenticated && !this.state.userinfo) {
            const userinfo = await this.props.auth.getUser()
            this.setState({ authenticated, userinfo })
          } else {
            this.setState({ authenticated })
          }
        }
      } catch(e) {
        this.setState({ authenticated: false })
      }
    }

    async componentDidMount() {
      this.checkAuthentication();
    }
  
    async componentDidUpdate() {
      this.checkAuthentication();
    }
  
    render() {
      const {authenticated, userinfo} = this.state
      if( restricted ) {
        if( authenticated === false ) {
          this.props.history.push('/login')
        }
        if(userinfo && !userinfo.email_verified) {
          return (
            <h1>You must confirm your email at auth center</h1>
          )
        }
      }
      return (
        <Component {...this.props} {...{authenticated, userinfo}} />
      )
    }
  }

  return withOctaAuth(WithAuth)
}

export default withAuth