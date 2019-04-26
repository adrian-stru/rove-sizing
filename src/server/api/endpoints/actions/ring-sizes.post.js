/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import HTMLGenerator from '../../../utlity/HTMLGenerator';
import mailchimp from '../../../connector/mailchimp';
import mailgun from '../../../connector/mailgun';
import keys from '../../../keys';
import { reject } from 'q';

const { validationResult } = require('express-validator/check');

export async function sendEmail(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const params = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    sizes: {
      d1: (req.body.sizes.d1 > 0) ? req.body.sizes.d1 : 'n/a',
      d2: (req.body.sizes.d2 > 0) ? req.body.sizes.d1 : 'n/a',
      d3: (req.body.sizes.d3 > 0) ? req.body.sizes.d1 : 'n/a',
      d4: (req.body.sizes.d4 > 0) ? req.body.sizes.d1 : 'n/a',
      d5: (req.body.sizes.d5 > 0) ? req.body.sizes.d1 : 'n/a',
    },
    subscribe: req.body.subscribe,
  };

  // Generate email data
  const html = await HTMLGenerator({ template: 'email/ring-sizing', params });
  const text = buildText(params);
  const data = {
    from: 'Rove NYC <info@rovenyc.com>',
    to: params.emailAddress,
    subject: 'Rove NYC - Your Ring Sizes',
    text,
    html,
  };

  try {
    await mailgun.messages().send(data, (error, body) => {
      if (error) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Internal Server Error',
        });
      }
    });
  } catch (err) {
    console.log('Mailgun failed to send email');
  }

  try {
    await mailchimp.request({
      method: 'post',
      path: `/lists/${keys.mailchimpListId}/members`,
      body: {
        email_address: params.emailAddress,
        status: 'subscribed',
        merge_fields: {
          FNAME: params.firstName,
          LNAME: params.lastName,
        },
      },
    });
  } catch (err) {
    console.log('Non critical error, Mailchimp failed to subscribe');
    console.log(err);
  }

  return res.send('Success');
}

function buildText(params) {
  return `Your Ring Sizes (MM)\n\nD1 / Thumb -${params.sizes.d1}\nD2 / Index - ${params.sizes.d2}\nD3 / Middle - ${params.sizes.d3}/nD4 / Middle - ${params.sizes.d4}/nD5 / Ring - ${params.sizes.d5}`;
}
