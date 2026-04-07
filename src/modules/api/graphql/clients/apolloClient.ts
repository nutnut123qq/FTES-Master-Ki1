import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { publicEnv } from "@/resources/env";

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: publicEnv.NEXT_PUBLIC_GRAPHQL_URL }),
    cache: new InMemoryCache()
  });
}
