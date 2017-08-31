"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const index_1 = require("./api/graphql/index");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const apiRouter = express.Router();
app.use("/api", apiRouter);
apiRouter.use("/graphql", index_1.graphQLHandler);
apiRouter.use("/graphiql", index_1.graphiQLHandler);
app.get("/", (req, res) => {
    res.send("API will be available at /api");
});
const portNo = process.env.PORT_NO || 5000;
app.listen(portNo, () => {
    console.log(`\n\n--- API is starting at ${portNo} ---`);
});
