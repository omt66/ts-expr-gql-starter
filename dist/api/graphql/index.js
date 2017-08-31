"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_server_express_1 = require("graphql-server-express");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
});
exports.graphQLHandler = graphql_server_express_1.graphqlExpress(req => ({
    schema,
    context: {
        data: "Relevant data can be passed in the context"
    },
}));
exports.graphiQLHandler = graphql_server_express_1.graphiqlExpress({
    endpointURL: '/api/graphql',
});
