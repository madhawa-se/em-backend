import express from 'express';
import Logger from './services/log';
import { createServer } from 'http';
import api from './controllers/api';
import "./db/connect";  

const app = express();
const port = 1337;
const httpServer = createServer(app);

Logger.info("Running the app");

app.use("/api/v1", api());

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

export default httpServer;