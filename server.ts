import express = require('express');

// Create a new express app instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(1337, function () {
  console.log('App is now listening on port 3000!');
});