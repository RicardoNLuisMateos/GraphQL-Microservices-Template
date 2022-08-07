import express from "express";
import cors from "cors";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { buildSubgraphSchema } from "@apollo/subgraph";
import 'graphql-import-node';
//const { sequelize } = require('./db/models/index');
//import libraryAuthentication from "./libraries/LibraryAuthentication";

import exampleSchema from './exampleSchema.graphql';
import { resolvers } from "./exampleResolver";

const app = express();
app.use(cors());

const typeDefs = exampleSchema;

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  context: async ({ req }) => {

    console.log("\n****************************\n");
    console.log(req.headers.userID);
    console.log("\n****************************\n");
    
    const userId = req.headers.userID || undefined;
    //const userId = 1 || undefined;
    //if (1 == 1) {

      const user = "TEST";

      //if (userId == null) throw new AuthenticationError('UNAUTHORIZED');

      return { user }
    //}
  },
});

server.start().then(res => {

  server.applyMiddleware({ app });

  app.listen(4001, () => {
    console.log("MicroService Example TEST CHANGE ✅");
    console.log("🚀🚀🚀🚀🚀");
    console.log("http://localhost:4001");
  });
});

/* 
npm run start-content-service
npm run start-review-service
npm run start-gateway
rover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql

*/