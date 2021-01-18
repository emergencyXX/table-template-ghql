import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import config from "./config";



const httpLink = createHttpLink({
    uri: config.GQL_URI,
});

const authLink = setContext((_, { headers }) => {

    return {
        headers: {
            ...headers,
            Authorization:`Bearer ${config.GITHUB_TOKEN}`
        }
    }
});

export const client = new ApolloClient({

    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
