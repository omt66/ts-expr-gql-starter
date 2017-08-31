import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default {
    Query: {
        //hello: (parent, args, ctx) => {
        hello: () => {
            return "World!"
        },
        now: () => {
            return new Date().toISOString();
        }
    },

    // Mutation: {

    // }
};
