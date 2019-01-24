const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');


mongoose.connect(keys.mongoURI, () => {
  console.log('connected to db');
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(session({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));