const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
sgMail.setApiKey(keys.sendGridKey);

class Mailer {
  constructor({ subject, recipients }, content) {
    this.from_email = 'no-reply@emailSurveySender';
    this.subject = subject;
    this.html = content;
    this.recipients = this.formatAddresses(recipients);
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email);
  }

};

//Testing Mailer class
const survey = {
  subject: 'this subject',
  recipients: [
    {email: 'j@j.com'},
    {email: 'm@j.com'},
    {email: 'g@j.com'},
  ]
}
const mailer = new Mailer(survey, '<div>Hi there</div>');

console.log('mailer', mailer);

//End Test

module.exports =  Mailer;