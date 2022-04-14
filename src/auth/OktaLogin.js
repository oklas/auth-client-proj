import React from 'react'
import * as OktaSignIn from '@okta/okta-signin-widget/dist/js/okta-sign-in.min'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import logo from '../media/logo-blue.png'

import {oktaConfig, appName} from '../consts'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: oktaConfig.oidc.issuer.split('/oauth2')[0],
      clientId: oktaConfig.oidc.clientId,
      redirectUri: oktaConfig.oidc.redirectUri,
      logo: logo,
      i18n: {
        en: { 'primaryauth.title': 'Sign in to ' + appName, },
        ru: { 'primaryauth.title': 'Войти в ' + appName, },
        it: { 'primaryauth.title': 'Accedere a ' + appName, },
      },
      authParams: {
        responseType: ['id_token', 'token'],
        issuer: oktaConfig.oidc.issuer,
        display: 'page',
        scopes: oktaConfig.oidc.scope.split(' '),
      },
      features: {
        registration: true
      },
    });
  }
  componentDidMount() {
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called beacuse we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }
  render() {
    return (
      <div>
        <div id="sign-in-widget" />
      </div>
    );
  }
}

export default Login