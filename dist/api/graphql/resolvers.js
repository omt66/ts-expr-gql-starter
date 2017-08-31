"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        hello: () => {
            return "World!";
        },
        now: () => {
            return new Date().toISOString();
        }
    },
};
