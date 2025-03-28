import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_URL, // Hasura GraphQL Endpoint
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET, // Admin Secret Key
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
