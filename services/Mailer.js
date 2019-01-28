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

    this.formEmail();
    this.addClickTTracking();
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

  sendEmail() {
    sgMail.sendMultiple(this.email);
  }

};

module.exports =  Mailer;