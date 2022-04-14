import React from 'react'
import ThroughProvider from 'react-through/lib/ThroughProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Security, SecureRoute, ImplicitCallback, Auth as OktaAuth } from '@okta/okta-react'
import ApolloProvider from './ApolloProvider'
import App from './App'
import {
  OktaLogin as Login,
  OktaLogout as Logout,
  OktaSignup as Signup,
} from './auth'
import { oktaConfig } from './consts'

const history = createBrowserHistory()

function customAuthHandler({ history }) {
  history.push('/login');
}

const oktaAuth = new OktaAuth({
  history,
  issuer: oktaConfig.oidc.issuer,
  client_id: oktaConfig.oidc.clientId,
  redirect_uri: oktaConfig.oidc.redirectUri,
  onAuthRequired: customAuthHandler,
});

const Root = () => (
  <BrowserRouter>
    <ThroughProvider>
      <ApolloProvider oktaAuth={oktaAuth}>
        <Security auth={oktaAuth}>
          <Switch>
            <Route path='/implicit/callback' component={ImplicitCallback}/>
            <Route path='/login' component={Login}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/' component={App}/>
          </Switch>
        </Security>
      </ApolloProvider>
    </ThroughProvider>
  </BrowserRouter>
)

export default Root
