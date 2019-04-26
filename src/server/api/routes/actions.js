/* eslint-disable import/prefer-default-export */
import { ActionsController } from '../endpoints/_index';

const { check } = require('express-validator/check')

export function routes(app) {
  app.post('/v1/actions/ring-sizing', [
    check('firstName').isLength({ min: 1 }),
    check('lastName').isLength({ min: 1 }),
    check('emailAddress').isEmail(),
    check('sizes.d1').isNumeric(),
    check('sizes.d2').isNumeric(),
    check('sizes.d3').isNumeric(),
    check('sizes.d4').isNumeric(),
    check('sizes.d5').isNumeric(),
    check('subscribe').isBoolean(),
  ], ActionsController.RingSizesPost.sendEmail);
}
