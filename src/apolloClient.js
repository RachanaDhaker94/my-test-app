// apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create Apollo Client instance
const client = new ApolloClient({
  link: new HttpLink({
    uri:'http://localhost:4000/',
   // uri: 'https://your-graphql-endpoint.com/graphql',  // Replace with your GraphQL endpoint
  }),
  cache: new InMemoryCache(),  // Caching mechanism to optimize network requests
});

export default client;