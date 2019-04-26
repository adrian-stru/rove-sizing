import keys from '.././keys';

const Mailchimp = require('mailchimp-api-v3');

const mailchimp = new Mailchimp(keys.mailchimpApiKey);

export default mailchimp;
