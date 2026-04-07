"use client";

import { ApolloProvider } from "@apollo/client";
import { useMemo } from "react";
import { createApolloClient } from "@/modules/api/graphql/clients/apolloClient";

export function SingletonHookProvider({ children }: { children: React.ReactNode }) {
  const apolloClient = useMemo(() => createApolloClient(), []);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
