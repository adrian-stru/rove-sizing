/* eslint-disable no-new */
import keys from './keys';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import http from 'http';
import cors from 'cors';
import path from 'path';
import expressValidator from 'express-validator';
import * as apiRoutes from './api/routes/_index';

import HTMLGenerator from './utlity/HTMLGenerator';

const distFolderpath = path.join(__dirname, '../../dist');

export default class Server {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.router = express.Router();
    this.PORT = process.env.PORT || 8080;

    this.setupMiddleware();
    this.setupRoutes();

    this.server.listen(this.PORT, () => console.log(`Server listening on port ${this.PORT}!`));
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(expressValidator());
    this.app.use(express.static(distFolderpath));
    this.app.set('views', distFolderpath);
  }

  setupRoutes() {
    apiRoutes.initRoutes(this.app);

    this.router.get('/*', (req, res) => {
      res.sendFile(path.join(distFolderpath, 'index.html'));
    });
    this.app.use('/', this.router);
  }
}

new Server();
