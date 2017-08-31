import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from "jsonwebtoken";
import * as cors from "cors";
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { graphQLHandler, graphiQLHandler } from './api/graphql/index';


//--- Set up Express ---
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.use("/graphql", graphQLHandler);
apiRouter.use("/graphiql", graphiQLHandler);

app.get("/", (req, res) => {
    res.send("API will be available at /api");
});

const portNo = process.env.PORT_NO || 5000;

app.listen(portNo, () => {
    console.log(`\n\n--- API is starting at ${portNo} ---`);
});