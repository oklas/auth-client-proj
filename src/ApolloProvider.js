import React from 'react'
import throughContainer from 'react-through/lib/throughContainer'
import { ApolloProvider as OriginalApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { createUploadLink } from 'apollo-upload-client'
import { graphqlConfig, appNamespace } from './consts'

const httpLink = createHttpLink({
  uri: graphqlConfig.url,
})

const uploadLink = createUploadLink({
  uri: graphqlConfig.url,
})

const contextData = { headers: {}, oktaAuth: null }

const authLink = setContext(() => {
  return (
    contextData
    .oktaAuth
    .getAccessToken()
    .then( token => {
      return { headers: {
        ...contextData.headers,
        Authorization: `Bearer ${token}`, 
      }}
    })
  )
})

const headersFromAgents = httpArea => (
  Object.keys(httpArea).reduce( (headers, header) => {
    headers[`X-${appNamespace}-${header}`] = httpArea[header].children
    return headers
  }, {})
)

const client = new ApolloClient({
  connectToDevTools: process.env.NODE_ENV !== 'production',
  cache: new InMemoryCache(),
  link: authLink.concat(uploadLink, httpLink)
})

const ApolloProvider = ({oktaAuth, HttpHeader, children}) => {
  contextData.headers = headersFromAgents(HttpHeader)
  contextData.oktaAuth = oktaAuth

  return (
    <OriginalApolloProvider
      client={ client }
    >
      {children}
    </OriginalApolloProvider>
  )
}

export default throughContainer('HttpHeader')(ApolloProvider)