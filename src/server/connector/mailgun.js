import keys from '.././keys';

const domain = keys.mailgunDomain;
console.log(domain);
const mailgun = require('mailgun-js')({ apiKey: keys.mailgunApiKey, domain });

export default mailgun;
