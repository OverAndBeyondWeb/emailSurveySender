const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, () => {
  console.log('connected to db');
});

const app = express();

const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));