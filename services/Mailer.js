const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
sgMail.setApiKey(keys.sendGridKey);

class Mailer {
  constructor({ subject, recipients }, content) {
    this.email = {};
    this.from_email = 'no-reply@emailSurveySender';
    this.subject = subject;
    this.html = content;
    this.recipients = this.formatAddresses(recipients);
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email);
  }

  formEmail() {
    this.email.from = this.from_email;
    this.email.subject = this.subject;
    this.email.html = this.html;
    this.email.to = this.recipients
  }

  addClickTTracking() {
    this.email.trackingSettings = {
      clickTracking: {
        enable:true
      }
    };
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

mailer.formEmail();

console.log('mailer', mailer);
mailer.addClickTTracking();

console.log('mailer', mailer);

//End Test

module.exports =  Mailer;