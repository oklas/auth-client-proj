import {oktaConfig} from './consts'

export default function() {
  if(!(
    oktaConfig &&
    oktaConfig.clientSecret === undefined &&
    oktaConfig.oidc &&
    oktaConfig.oidc.clientSecret === undefined &&
    oktaConfig.oidc.clientId &&
    oktaConfig.oidc.issuer &&
    oktaConfig.oidc.redirectUri &&
    oktaConfig.oidc.scope
  )) console.error(`
    src/config/okta.json must be like this:
    {
      "oidc": {
        clientId: '{clientId}',
        issuer: 'https://{yourOktaDomain}.com/oauth2/default',
        "redirectUri": "http://localhost:8080/implicit/callback",
        "scope": "openid profile email"
      }
    }
  `)
}
