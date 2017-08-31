import { makeExecutableSchema } from 'graphql-tools';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export const graphQLHandler = graphqlExpress(req => ({
    schema,
    context: {
        data: "Relevant data can be passed in the context"
    },
}));

export const graphiQLHandler = graphiqlExpress({
    endpointURL: '/api/graphql',
});
