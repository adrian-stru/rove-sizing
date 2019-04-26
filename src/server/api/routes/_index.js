/* eslint-disable import/prefer-default-export */
import * as ActionRoutes from './actions';

export function initRoutes(app) {
  app.get('/v1', (req, res) => {

    res.status(200).send({
      message: 'Health check successful!',
    });
  });

  ActionRoutes.routes(app);
}
