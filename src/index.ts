import { ApolloClient } from 'apollo-client'
import { gql } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import fetch from 'node-fetch'
import 'isomorphic-fetch'

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
  // fetch
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: link,
  cache: cache
})

client
  .query({
    query: gql`
      {
        books {
          title
          author
        }
      }
    `
  })
  .then(
    (result): void => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(result))
    }
  )
  .catch(
    (result): void => {
      // eslint-disable-next-line no-console
      console.error(result)
    }
  )
