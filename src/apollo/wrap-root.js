import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './client'

// const client = new ApolloClient({
//   uri: 'https://api-euwest.graphcms.com/v1/ck2vojr6f2q2501eofa05ajun/master',
//   fetch
// })

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)