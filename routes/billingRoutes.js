module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    console.log(req.body);
    res.send(req.user);
  });
};