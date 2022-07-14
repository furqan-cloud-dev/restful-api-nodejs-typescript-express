import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import connect from './db/connect';
import routes from './routes';

const app: Express = express();
const port = process.env.PORT;

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  connect();
  routes(app);
});




/*
// Custom Middleware
app.use((req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400).send('Server requires application/json')
  } else {
    next()
  }
});
*/