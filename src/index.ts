import express from 'express';
import Logger from './services/log';
import { createServer } from 'http';
import api from './controllers/api';
import "./db/connect";
import cors from 'cors';

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("src/docs/swagger.yaml");

const app = express();
const port = 1337;

app.options('*', cors());
app.use(cors());

const httpServer = createServer(app);

Logger.info("Running the app");


app.use("/api/v1", api());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_req, res) => {
  res.send('Employee REST API V 1.0');
});

app.listen(port, () => {
  console.log(`Employee Manager API listening on port ${port}`)
});
export default httpServer;