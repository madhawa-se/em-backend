import express from 'express';
import Logger from './services/log';
import { createServer } from 'http';
import api from './controllers/api';
import "./db/connect";
import cors from 'cors';

const app = express();
const port = 1337;
const httpServer = createServer(app);

Logger.info("Running the app");

app.options('*', cors());

app.use("/api/v1", api());

app.get('/', (_req, res) => {
  res.send('Employee REST API V 1.0');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
export default httpServer;