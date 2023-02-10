import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://api-ap-northeast-1.hygraph.com/v2/ck2vojr6f2q2501eofa05ajun/master',
  fetch
})
