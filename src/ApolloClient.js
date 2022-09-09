import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://nuvocore-stg.lifewallet.com/gql",
});

const authLink = setContext(({ operationName }, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("session");
  const nonAuthMutations = ["LoginMutation"];

  // return the headers to the context so httpLink can read them
  return {
    headers: nonAuthMutations.includes(operationName)
      ? {}
      : { authorization: token },
  }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  export default client;