"use client"; // Ensure this is a Client Component

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

export default function Providers({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
