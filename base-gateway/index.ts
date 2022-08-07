import express from "express";
import cors from "cors";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
    ApolloServerPluginLandingPageDisabled
} from "apollo-server-core";
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway');
const { readFileSync } = require('fs');
const getErrorCode = require('./libraries/errors');

const app = express();
app.use(cors());

const file = "./src/supergraph.graphql";//execute rover command for generate schema: rover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql
const supergraphSdl = readFileSync(file).toString();

const gateway = new ApolloGateway({
    supergraphSdl,
    buildService({ name, url }: any) {

        return new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }: any) {
                request.http.headers.set('userId', context.userId)
            }
        })
    }
});

const server = new ApolloServer({
    gateway,
    context: async ({ req }) => {

        const token = req.headers.authorization || undefined;

        if (token != undefined) {
            const user = "test";//validate token

            if (user == null) throw new AuthenticationError('UNAUTHORIZED');

            return { user };
        }
    },
    formatError: (err) => {
        let error: any;
        if (err.message.startsWith('Context creation failed: UNAUTHORIZED')) {
            err.message = 'UNAUTHORIZED';
        }
        console.log("ERROR: ", err)
        error = getErrorCode(err.message, null);

        if (error == null) {
            error = getErrorCode('', err.message);
        }

        return error;
    },
});

server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log("GraphQL Gateway ✅");
        console.log("🚀🚀🚀🚀🚀");
        console.log("http://localhost:4000/graphql");
    });
    //Synchronize sequelize with the database
    /* sequelize.sync(); */
});