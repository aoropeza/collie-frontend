import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const client = new ApolloClient({
  link: new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        'x-api-key': 'vuCjeYqmRc92fYOVxWPjEacpHLfw3oNaaJcmE8Aq'
      }
    })
    return forward(operation)
  }).concat(
    new HttpLink({
      uri: 'https://api-dev.alexoropeza.dev/collie/api'
    })
  ),
  cache: new InMemoryCache()
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
