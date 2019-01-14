const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('app ready');
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));