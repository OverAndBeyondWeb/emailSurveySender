module.exports = survey => {
  return `
    <div>
      Hello, how are you?
      ${survey.body}
    </div>
  `;
};