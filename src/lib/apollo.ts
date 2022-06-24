import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ro12wp1d0c01yy0rzl9bd1/master',
    cache: new InMemoryCache()
})