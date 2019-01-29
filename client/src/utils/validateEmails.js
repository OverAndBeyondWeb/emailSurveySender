const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {

  if (!emails) return;

  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRegex.test(email) === false);

  if (invalidEmails.length > 0) {
    return `These emails ar invalid: ${invalidEmails}`
  }

  return;
};