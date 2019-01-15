const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, () => {
  console.log('connected to db');
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(session({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));