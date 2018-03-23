// app.ts - application configuration module.
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as morgan from 'morgan';
import * as config from '../config/properties';

const app: express.Application = express();

// configure all enviroments.
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set host and port
app.set("host", config.HOST);
app.set("port", config.PORT);

// declare all routes and middlewares.
import { Routes } from "../routes/routes";
app.use('/api', Routes);

export const App = app;