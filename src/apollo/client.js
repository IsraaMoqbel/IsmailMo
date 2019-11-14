import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck2vojr6f2q2501eofa05ajun/master',
  fetch
})
