//const { QueryTypes } = require('sequelize');
import { IResolvers } from '@graphql-tools/utils';
//const { sequelize } = require('./db/models/index');
//import LibraryAuthentication from "./libraries/LibraryAuthentication";
const { errorName } = require('./libraries/errorContant')
const date = require('date-and-time')

//initModels(sequelize);

export const resolvers = {
    Query: {
        HelloWoks: async (parent: any, args: any, { user }: any) => {

            return {
                id: 1,
                data: "Hello Work"
            }
        },
    }
}